import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RobotCanvas from '../components/RobotCanvas'
import '../styles/hero.css'

export const ScrollRevealText = ({
    text,
    progress,
    startOffset,
    endOffset,
    className,
}: {
    text: string
    progress: any
    startOffset: number
    endOffset: number
    className: string
}) => {
    const words = text.split(' ')

    return (
        <p className={className}>
            {words.map((word: string, i: number) => {
                const wordStart = startOffset + (i / words.length) * (endOffset - startOffset)
                const wordEnd = startOffset + ((i + 1) / words.length) * (endOffset - startOffset)

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(progress, [wordStart, wordEnd], [0.15, 1])

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const color = useTransform(
                    progress,
                    [
                        Math.max(0, wordStart - 0.005),
                        wordStart,
                        wordEnd,
                        Math.min(1, wordEnd + 0.005),
                    ],
                    [
                        'var(--color-text)',
                        'var(--color-primary)',
                        'var(--color-primary)',
                        'var(--color-text)',
                    ]
                )

                return (
                    <motion.span key={i} style={{ opacity, color }} className="word-span">
                        {word}{' '}
                    </motion.span>
                )
            })}
        </p>
    )
}

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    return (
        <div ref={containerRef} style={{ height: '300vh' }}>
            <section className="hero-section container" style={{ position: 'sticky', top: 0 }}>

                {/* ── Full-width display name ── */}
                <motion.div
                    className="hero-name-row"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="hero-display-name">
                        AADARSH<span className="hero-square-dot"></span>
                    </h1>
                </motion.div>

                {/* ── Bottom: left bio + right 3D slot ── */}
                <div className="hero-body">
                    {/* Left column */}
                    <motion.div
                        className="hero-bio-col"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.9 }}
                    >
                        {/* Role label */}
                        <p className="text-mono hero-role">
                            <span className="status-dot" />
                            Full-Stack Developer &amp; UI Engineer
                        </p>

                        {/* Bio paragraphs with scroll-reveal */}
                        <ScrollRevealText
                            text="Hey, I'm Aadarsh, a developer who loves turning complex problems into clean, fast, and delightful digital products. I specialise in building end to end web applications with a strong eye for design and obsession with performance."
                            progress={scrollYProgress}
                            startOffset={0.02}
                            endOffset={0.55}
                            className="hero-bio"
                        />

                        <ScrollRevealText
                            text="Whether it's a sleek landing page or a fullscale SaaS platform, I bring precision and creativity to every line of code."
                            progress={scrollYProgress}
                            startOffset={0.55}
                            endOffset={1.0}
                            className="hero-bio"
                        />

                        {/* Tech stack pills */}
                        <div className="hero-stack">
                            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map(tech => (
                                <span key={tech} className="hero-tag text-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="hero-links">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-link text-mono"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aadarsh-sharma11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-link text-mono"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </motion.div>

                    {/* Right column — Emo Robot 3D model */}
                    <div className="hero-3d-slot">
                        <RobotCanvas />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero
