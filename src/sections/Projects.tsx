import { useRef } from 'react'
import { motion, useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion'
import '../styles/projects.css'

const projects = [
    {
        title: 'Portfolio Site',
        category: 'Design System',
        metric: 'Motion-First',
        description: 'A modern portfolio with React, TypeScript, and Tailwind CSS featuring smooth animations.',
        color: '#EF6D58',
        image: null
    },
    {
        title: 'E-Commerce Platform',
        category: 'Web Application',
        metric: 'Full-Stack',
        description: 'Complete e-commerce solution with payment integration and real-time inventory management.',
        color: '#5D6D3E',
        image: null
    },
    {
        title: 'AI Dashboard',
        category: 'Analytics',
        metric: '50% Faster',
        description: 'Real-time data visualization dashboard powered by machine learning insights.',
        color: '#DDB8A6',
        image: null
    },
    {
        title: 'Mobile App',
        category: 'iOS/Android',
        metric: 'Cross-Platform',
        description: 'Native mobile application with seamless user experience across devices.',
        color: '#8B9E6A',
        image: null
    },
    {
        title: 'SaaS Platform',
        category: 'Cloud Application',
        metric: 'Scalable',
        description: 'Enterprise-grade SaaS platform with advanced features and analytics.',
        color: '#C9A882',
        image: null
    }
]

const Projects = () => {
    const wrapperRef = useRef(null)
    const rowRef = useRef(null)
    const x = useMotionValue(0)

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ['start start', 'end end'],
    })

    useMotionValueEvent(scrollYProgress, 'change', (v: number) => {
        if (!rowRef.current) return
        const endPadding = 64
        const maxX = -((rowRef.current as HTMLDivElement).scrollWidth - window.innerWidth + endPadding)
        x.set(v * maxX)
    })

    return (
        <div ref={wrapperRef} className="projects-scroll-wrapper">
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
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="project-card"
                            >
                                <div
                                    className="project-image-wrapper"
                                    style={{
                                        backgroundColor: project.color,
                                        backgroundImage: project.image ? `url(${project.image})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center top',
                                    }}
                                >
                                    <div className="project-metric text-mono">{project.metric}</div>
                                    <span className="project-number text-mono">0{index + 1}</span>
                                </div>

                                <div className="project-info">
                                    <p className="text-mono project-category">{project.category}</p>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    <a href="#" className="view-project-link text-mono">View Project ↗</a>
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
