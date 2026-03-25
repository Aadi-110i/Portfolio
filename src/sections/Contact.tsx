import { } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact-section container section">
            <div className="contact-grid">
                <div className="contact-info">
                    <h2 className="text-huge">LET'S<br />TALK<span className="text-coral">.</span></h2>
                    <p className="text-mono contact-message">
                        Have a project in mind or just want to say hi? <br />
                        I'm always open to new opportunities.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:aadarsh@example.com" className="contact-link-item">
                            <Mail size={20} />
                            <span className="text-mono">aadarsh@example.com</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <Github size={20} />
                            <span className="text-mono">github.com/aadarsh</span>
                        </a>
                        <a href="https://linkedin.com/in/aadarsh" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <Linkedin size={20} />
                            <span className="text-mono">aadarsh-sharma</span>
                        </a>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="form-group">
                        <label className="text-mono">Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <label className="text-mono">Email</label>
                        <input type="email" placeholder="email@example.com" />
                    </div>

                    <div className="form-group">
                        <label className="text-mono">Message</label>
                        <textarea placeholder="Tell me about your project..." rows={5}></textarea>
                    </div>

                    <button type="submit" className="submit-btn text-mono">
                        Send Message <ArrowRight size={16} />
                    </button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
