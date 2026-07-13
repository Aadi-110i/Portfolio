import { motion } from 'framer-motion'
import '../styles/main.css'

const About = () => {
    return (
        <section id="about" className="container section about-section" style={{ position: 'relative' }}>
            <div className="hero-glow" style={{ top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <header className="projects-header" style={{ marginBottom: '1.5rem' }}>
                    <h2 className="text-huge" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>ABOUT<span className="text-coral">.</span></h2>
                    <div className="line-divider" />
                </header>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-content" style={{ flex: '1 1 500px', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: '1.8', color: 'var(--foreground)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I'm Aadarsh Sharma, a full-stack developer and UI engineer based in India. I craft digital experiences that blend performance with pixel-perfect design — from concept to deployment.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            With a deep curiosity for how things work under the hood, I enjoy building scalable web applications, optimising critical render paths, and creating interfaces that feel alive.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or diving into competitive programming challenges.
                        </p>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
                    >
                        <img 
                            src="/assets/profile.jpg" 
                            alt="Aadarsh Sharma" 
                            style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', objectFit: 'cover', filter: 'grayscale(20%)' }} 
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
