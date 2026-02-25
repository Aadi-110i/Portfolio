import { } from 'react'
import { motion } from 'framer-motion'
import '../styles/experience.css'

const experiences = [
    {
        role: 'Full-Stack Developer',
        company: 'Tech Startup',
        period: 'Jan 2024 - Present',
        details: 'Building modern web applications with React and Node.js, focusing on performance and user experience.',
        bullets: [
            'Developed scalable REST APIs using Node.js and Express with authentication and real-time features',
            'Built responsive React components with TypeScript, achieving 98% lighthouse score',
            'Optimized database queries reducing load times by 40%',
            'Led team of 3 developers in feature delivery and code review',
            'Implemented CI/CD pipeline with GitHub Actions and Docker'
        ]
    },
    {
        role: 'Frontend Engineer',
        company: 'Design Agency',
        period: 'Jun 2023 - Dec 2023',
        details: 'Created pixel-perfect responsive designs and interactive web interfaces using modern frameworks.',
        bullets: [
            'Converted Figma designs to responsive React components with Tailwind CSS',
            'Implemented complex animations using Framer Motion and GSAP',
            'Collaborated with designers to ensure design system consistency',
            'Improved Core Web Vitals by 35% through optimization',
            'Mentored 2 junior developers on React best practices'
        ]
    },
    {
        role: 'Junior Developer',
        company: 'Web Development Studio',
        period: 'Jan 2023 - May 2023',
        details: 'Developed and maintained various web projects, learning full-stack development principles.',
        bullets: [
            'Built dynamic web pages using HTML, CSS, and JavaScript',
            'Contributed to backend development with Node.js and MongoDB',
            'Participated in code reviews and team meetings',
            'Created documentation for project setup and deployment',
            'Fixed bugs and implemented feature requests from clients'
        ]
    }
]

const skills = [
    'React', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion',
    'Git', 'Docker', 'AWS', 'GraphQL'
]

const Experience = () => {
    return (
        <section id="experience" className="experience-section container section">
            <div className="exp-grid">
                <div className="exp-left">
                    <h2 className="text-huge">EXP<span className="text-coral">.</span></h2>
                    <p className="text-mono">Professional Journey</p>

                    <div className="skills-cloud">
                        {skills.map(skill => (
                            <span key={skill} className="skill-tag text-mono">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="exp-right">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="exp-item"
                        >
                            <div className="exp-header">
                                <h3 className="exp-role">{exp.role}</h3>
                                <span className="exp-period text-mono">{exp.period}</span>
                            </div>
                            <p className="exp-company text-coral text-mono">{exp.company}</p>
                            <p className="exp-details">{exp.details}</p>

                            <ul className="exp-bullets">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="exp-bullet">{bullet}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
