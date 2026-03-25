import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import '../styles/cursor.css'

const CursorFollower = () => {
    const [cursorState, setCursorState] = useState('default')
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 700 }
    const ringX = useSpring(mouseX, springConfig)
    const ringY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseEnter = () => {
            setCursorState('hover')
        }

        const handleMouseLeave = () => {
            setCursorState('default')
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Add hover states to clickable elements
        const clickables = document.querySelectorAll('a, button, [role="button"]')
        clickables.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            clickables.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [mouseX, mouseY])

    return (
        <>
            {/* Precision Dot (Instant) */}
            <motion.div
                className="cursor-dot"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Trailing Ring (Spring) */}
            <motion.div
                className={`cursor-ring ${cursorState}`}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    scale: cursorState === 'hover' ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </>
    )
}

export default CursorFollower
