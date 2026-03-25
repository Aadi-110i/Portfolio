import { } from 'react'
import { motion } from 'framer-motion'
import '../styles/experience.css'

const experiences = [
    {
        role: 'Obsidian — Modern Seat Booking Platform',
        company: 'SaaS & Productivity',
        period: 'Feb 2026',
        details: 'Built a high-performance seat booking system with a focus on real-time availability and a sleek obsidian-themed developer experience.',
        bullets: [
            'Next-generation booking UI with real-time seat state management',
            'Full-stack implementation using Next.js 15 and Prisma ORM',
            'Integrated secure authentication workflows (JWT & Bcrypt)',
            'Modern styling with Tailwind CSS and Framer Motion animations',
            'Optimized data layer for fast concurrent booking requests'
        ]
    },
    {
        role: 'Yatra — Smart India Hackathon Project',
        company: 'Tourism & Culture',
        period: "Jul '25 – Aug '25",
        details: "Developed Yatra for the Smart India Hackathon, a digital tourism platform showcasing Sikkim's monasteries with interactive 3D models and experiences.",
        bullets: [
            'Recognised as a key project for cultural preservation and responsible tourism',
            'Presented historical scripts, cultural insights, and monastery details',
            'Implemented smart navigation with unexplored path highlighting',
            'Built interactive 3D monastery models using Three.js',
            'Stack: HTML, Tailwind CSS, Three.js, React.js, Node.js, MongoDB'
        ]
    },
    {
        role: 'Employee Leave Management System',
        company: 'HR & Management',
        period: 'Feb 2026',
        details: 'A comprehensive leave management solution with employee, manager, and admin portals with multi-level approval workflows.',
        bullets: [
            'Multi-level approval workflows (Manager → Admin)',
            'Real-time leave balance tracking per employee',
            'Role-based access control across three user types',
            'Built with React.js, Node.js, MongoDB, and Tailwind CSS',
            'Responsive dashboard for HR analytics and reporting'
        ]
    },
    {
        role: 'Study Plan Management System',
        company: 'Education & Productivity',
        period: 'Jan 2026',
        details: 'An interactive platform for students to organise, track, and manage their study schedules, assignments, and exam preparations effectively.',
        bullets: [
            'Customisable study calendars with reminder notifications',
            'Progress tracking and analytics for better time management',
            'Assignment and exam deadline management in one place',
            'Built with React.js, Node.js, Express, and MongoDB',
            'Clean, distraction-free UI focused on student productivity'
        ]
    }
]

const skills = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript',
    'MongoDB', 'Express', 'Tailwind CSS', 'Three.js',
    'OpenAI API', 'Git', 'Java', 'C++'
]

const Experience = () => {
    return (
        <section id="experience" className="experience-section container section">
            <div className="exp-grid">
                <div className="exp-left">
                    <h2 className="text-huge">EXP<span className="text-coral">.</span></h2>
                    <p className="text-mono">Projects Built</p>

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
