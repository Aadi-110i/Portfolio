import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timeline } from '../components/ui/timeline'
import '../styles/certifications.css'

const certifications = [
    {
        title: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google',
        partner: null,
        date: '2024',
        accent: '#4285F4',
        image: '/assets/networking-certificate.png',
        link: 'https://coursera.org/verify/LHGMC3QJ41X6',
    },
    {
        title: 'Introduction to Hardware and Operating Systems',
        issuer: 'IBM',
        partner: null,
        date: '2024',
        accent: '#054ADA',
        image: '/assets/hardware-certificate.png',
        link: 'https://coursera.org/verify/QNGIH2OVYA83',
    },
    {
        title: 'Full Stack Development with MERN',
        issuer: 'Nasscom',
        partner: null,
        date: '2025',
        accent: '#0076D6',
        image: '/assets/mern-certificate.png',
        link: '/assets/mern-certificate.png',
    },
    {
        title: 'Full Stack Development with MEAN',
        issuer: 'Nasscom',
        partner: null,
        date: '2025',
        accent: '#0076D6',
        image: '/assets/mean-certificate.png',
        link: '/assets/mean-certificate.png',
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        issuer: 'Oracle',
        partner: null,
        date: '2025',
        accent: '#C74634',
        image: '/assets/oracle-ai-certificate.png',
        link: '/assets/oracle-ai-certificate.png',
    },
    {
        title: 'Oracle Data Platform 2025 Certified Foundations Associate',
        issuer: 'Oracle',
        partner: null,
        date: '2025',
        accent: '#C74634',
        image: '/assets/oracle-data-certificate.png',
        link: '/assets/oracle-data-certificate.png',
    },
    {
        title: 'GEN AI NASSCOM Certification',
        issuer: 'NASSCOM',
        partner: 'SFJ',
        date: '2026',
        accent: '#FFD700',
        image: '/assets/genai-certificate.png',
        link: '/assets/genai-certificate.png',
    },
]

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)
    // Pre-calculated pseudo-random rotations for each card instance
    const rotations = [6, -4, 8, -6];
    const rotation = rotations[index % rotations.length];

    return (
        <div
            className="cert-timeline-card relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Cert info (Thinner) */}
            <div className="cert-timeline-info">
                {/* Badge placed top right absolutely via CSS */}
                <span className="cert-timeline-badge float-badge">
                    <span className="cert-timeline-badge-dot" />
                    Verified
                </span>
                <h3 className="cert-timeline-title mb-2 pr-24">{cert.title}</h3>
                
                <div className="flex flex-col gap-2 mt-2">
                    <p className="cert-timeline-issuer text-mono uppercase tracking-widest text-[10px] text-coral/80 font-bold">{cert.issuer}</p>
                    {cert.partner && (
                        <p className="cert-timeline-partner text-mono uppercase tracking-widest text-[10px] text-muted-foreground font-bold">{cert.partner}</p>
                    )}
                </div>

                {cert.link && (
                    <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cert-verify-link text-mono text-[9px] uppercase tracking-tighter mt-4 inline-block hover:text-coral transition-colors"
                    >
                        Verify Certificate ↗
                    </a>
                )}
            </div>

            {/* Hover floating image preview (on the right) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="cert-floating-preview hidden md:block" // Hide on mobile where hover doesn't make sense
                        initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10, y: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: rotation, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: rotation + 10, y: 20 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            right: '-10%',
                            top: '-30%',
                            zIndex: 30,
                            pointerEvents: 'none',
                        }}
                    >
                        <div className="cert-floating-img-square">
                            <img
                                src={cert.image}
                                alt={`${cert.title} certificate`}
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const Certifications = () => {
    const timelineData = certifications.map((cert, index) => ({
        title: cert.date,
        content: <CertCard cert={cert} index={index} />,
    }))

    return (
        <section id="certifications" className="certifications-section container section">
            <div className="certs-header">
                <h2 className="text-huge">CERTS<span className="text-coral">.</span></h2>
                <p className="text-mono">Certifications & Credentials</p>
            </div>
            <Timeline data={timelineData} />
        </section>
    )
}

export default Certifications
