import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../styles/projects.css'

import { portfolioData } from '../data/portfolio'

const colors = ['#EF6D58', '#5D6D3E', '#DDB8A6', '#8B9E6A', '#C9A882']

const Projects = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const rowRef = useRef<HTMLDivElement>(null)
    const [maxX, setMaxX] = useState(0)
    const [wrapperHeight, setWrapperHeight] = useState('500vh')

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ['start start', 'end end'],
    })

    useEffect(() => {
        const calculateMaxX = () => {
            if (rowRef.current) {
                if (window.innerWidth <= 768) {
                    setMaxX(0)
                    setWrapperHeight('auto')
                    return
                }
                const trackOuter = rowRef.current.parentElement
                const paddingLeftStr = trackOuter ? window.getComputedStyle(trackOuter).paddingLeft : '64px'
                const paddingLeft = parseInt(paddingLeftStr) || 64

                const scrollWidth = rowRef.current.scrollWidth
                const maxTranslate = window.innerWidth - (paddingLeft + scrollWidth)

                // Allow enough padding at the end so it completely scrolls into view
                const newMaxX = maxTranslate < 0 ? maxTranslate - (window.innerWidth * 0.15) : 0
                setMaxX(newMaxX)
                setWrapperHeight(`calc(100vh + ${Math.abs(newMaxX)}px)`)
            }
        }

        // Delay slighty to ensure fonts/layout are fully painted
        const timer = setTimeout(calculateMaxX, 200)
        window.addEventListener('resize', calculateMaxX)

        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', calculateMaxX)
        }
    }, [portfolioData.projects.length])

    // Derive x from scroll progress so the track translates to the left (revealing right projects)
    const x = useTransform(scrollYProgress, [0, 1], [0, maxX])

    return (
        <div ref={wrapperRef} className="projects-scroll-wrapper" style={{ height: wrapperHeight }}>
            <section id="work" className="projects-sticky">
                <div className="container projects-header-wrap">
                    <header className="projects-header">
                        <h2 className="text-mono text-coral">Selected Work</h2>
                        <div className="line-divider" />
                    </header>
                </div>

                <div className="projects-track-outer">
                    <motion.div
                        ref={rowRef}
                        style={{ x }}
                        className="projects-track"
                    >
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={project.id || project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="project-card"
                            >
                                <div
                                    className="project-image-wrapper"
                                    style={{
                                        backgroundColor: colors[index % colors.length],
                                    }}
                                >
                                    {(project as any).image && (
                                        <img
                                            src={(project as any).image}
                                            alt={project.title}
                                            className="project-overview-img"
                                        />
                                    )}
                                    <div className="project-metric text-mono">{project.duration}</div>
                                    <span className="project-number text-mono">0{index + 1}</span>
                                </div>

                                <div className="project-info">
                                    <p className="text-mono project-category">{project.category}</p>
                                    <h3 className="project-title">{project.title.split(' - ')[0]}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-link text-mono">View Project ↗</a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="projects-progress-bar">
                    <motion.div
                        className="projects-progress-fill"
                        style={{ scaleX: scrollYProgress }}
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects
