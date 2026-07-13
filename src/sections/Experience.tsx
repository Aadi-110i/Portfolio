import { } from 'react'
import { motion } from 'framer-motion'
import '../styles/experience.css'

const experiences = [
    {
        role: 'Training in Data Structures & Algorithms',
        company: 'Lovely Professional University',
        period: '2025',
        details: 'Intensive training focusing on problem-solving and algorithmic optimization.',
        bullets: [
            'Mastered core data structures (Trees, Graphs, Hash Tables)',
            'Optimized algorithms for time and space complexity',
            'Solved complex programming challenges efficiently'
        ]
    },
    {
        role: 'Training in MERN Stack & DevOps',
        company: 'CipherSchools',
        period: '2026',
        details: 'Comprehensive training in modern web development and DevOps practices.',
        bullets: [
            'Built full-stack applications using MongoDB, Express, React, Node.js',
            'Implemented RESTful APIs and modern frontend architectures',
            'Learned deployment pipelines and basic DevOps tooling'
        ]
    },
    {
        role: 'Yatra — Smart India Hackathon Project',
        company: 'Smart India Hackathon',
        period: "Jul '25 – Aug '25",
        details: "Developed Yatra for the Smart India Hackathon, a digital tourism platform showcasing Sikkim's monasteries with interactive 3D models and experiences.",
        bullets: [
            'Recognised as a key project for cultural preservation and responsible tourism',
            'Presented historical scripts, cultural insights, and monastery details',
            'Implemented smart navigation with unexplored path highlighting',
            'Built interactive 3D monastery models using Three.js',
            'Stack: HTML, Tailwind CSS, Three.js, React.js, Node.js, MongoDB'
        ]
    }
]

const skills = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript',
    'MongoDB', 'Express', 'Tailwind CSS', 'Three.js',
    'OpenAI API', 'Git', 'Java'
]

const Experience = () => {
    return (
        <section id="experience" className="experience-section container section">
            <div className="exp-grid">
                <div className="exp-left">
                    <h2 className="text-huge">EXP<span className="text-coral">.</span></h2>
                    <p className="text-mono">Experience & Training</p>

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
