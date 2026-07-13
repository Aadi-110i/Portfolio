import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Timeline } from '../components/ui/timeline'
import '../styles/certifications.css'

const certifications = [
    {
        title: 'Dynamic Programming Camp (Matrix Exponentiation & SQRT Decomposition)',
        issuer: 'AlgoUniversity',
        partner: 'Mentored by Manas Kumar Verma',
        date: '2026',
        accent: '#FF4500',
        image: '/assets/AlgoUniversity.png',
        link: '/assets/AlgoUniversity.png',
    },
    {
        title: 'JavaScript Developer Certification (300 Hours)',
        issuer: 'freeCodeCamp',
        partner: null,
        date: '2026',
        accent: '#0A0A23',
        image: '/assets/freeCode camp.png',
        link: '/assets/freeCode camp.png',
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
    }
]

const CertCard = ({
    cert,
    index,
    onMouseEnter,
    onMouseLeave,
}: {
    cert: typeof certifications[0]
    index: number
    onMouseEnter: (i: number) => void
    onMouseLeave: () => void
}) => {
    return (
        <div
            className="cert-timeline-card relative"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
        >
            {/* Cert info */}
            <div className="cert-timeline-info">
                {/* Badge */}
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
        </div>
    )
}

const Certifications = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)

    useEffect(() => {
        const lerp = (start: number, end: number, factor: number) =>
            start + (end - start) * factor

        const animate = () => {
            setSmoothPosition(prev => ({
                x: lerp(prev.x, mousePosition.x, 0.12),
                y: lerp(prev.y, mousePosition.y, 0.12),
            }))
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [mousePosition])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }

    const timelineData = certifications.map((cert, index) => ({
        title: cert.date,
        content: (
            <CertCard
                cert={cert}
                index={index}
                onMouseEnter={(i) => { setHoveredIndex(i); setIsVisible(true) }}
                onMouseLeave={() => { setHoveredIndex(null); setIsVisible(false) }}
            />
        ),
    }))

    return (
        <section id="certifications" className="certifications-section container section">
            <div className="certs-header">
                <h2 className="text-huge">CERTS<span className="text-coral">.</span></h2>
                <p className="text-mono">Certifications & Credentials</p>
            </div>

            {/* Wrapper to track mouse position and render floating preview */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                style={{ position: 'relative' }}
            >
                {/* Smooth cursor-following floating image preview */}
                <div
                    className="hidden md:block"
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                        zIndex: 50,
                        left: 0,
                        top: 0,
                        transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 130}px, 0)`,
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? '1' : '0.85',
                        transition: 'opacity 0.25s cubic-bezier(0.4,0,0.2,1), scale 0.25s cubic-bezier(0.4,0,0.2,1)',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
                        width: '270px',
                        height: '175px',
                        background: '#111',
                    }}
                >
                    {certifications.map((cert, index) => (
                        <img
                            key={cert.title}
                            src={cert.image}
                            alt={cert.title}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease',
                                opacity: hoveredIndex === index ? 1 : 0,
                                filter: hoveredIndex === index ? 'none' : 'blur(8px)',
                                transform: hoveredIndex === index ? 'scale(1)' : 'scale(1.08)',
                            }}
                        />
                    ))}
                    {/* Subtle gradient overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)',
                    }} />
                </div>

                <Timeline data={timelineData} />
            </div>
        </section>
    )
}

export default Certifications
