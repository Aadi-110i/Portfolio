import { motion } from 'framer-motion'
import '../styles/main.css'
import '../styles/about.css'

const About = () => {
    return (
        <section id="about" className="container section about-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Heading */}
                <h2 className="about-heading">
                    ABOUT<span className="text-coral">.</span>
                </h2>

                {/* Two-column layout */}
                <div className="about-grid">
                    {/* ── Left: bio text + buttons ── */}
                    <div className="about-text-content">
                        <motion.p
                            className="about-para"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            I'm <span className="about-highlight">Aadarsh Sharma</span>, a full-stack
                            developer and UI engineer based in India. I craft digital experiences that
                            blend performance with pixel-perfect design — from concept to deployment.
                        </motion.p>

                        <motion.p
                            className="about-para"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                        >
                            With a deep curiosity for how things work under the hood, I enjoy building
                            scalable web applications, optimising critical render paths, and creating
                            interfaces that feel <span className="about-highlight">alive</span>.
                        </motion.p>

                        <motion.p
                            className="about-para"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                        >
                            When I'm not coding, you'll find me exploring new frameworks, contributing
                            to open-source projects, or diving into competitive programming challenges.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="about-buttons"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 }}
                        >
                            <a
                                href="/assets/Aadarsh_Resume.pdf"
                                download
                                className="about-btn about-btn--primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>

                            <a
                                href="/assets/Aadarsh_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-btn about-btn--outline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                View Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Right: Photo ── */}
                    <div className="about-image-col">
                        {/* Decorative dot */}
                        <motion.div
                            className="about-dot"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        />

                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <img
                                src="/assets/profile.jpg"
                                alt="Aadarsh Sharma"
                                className="about-profile-img"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
