import { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/loading.css'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="loading-bg">
        <motion.img
          src="/assets/Gemini_Generated_Image_21avi321avi321av.png"
          alt=""
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="loading-overlay" />
      </div>

      <div className="loading-content">
        <motion.div
          className="loading-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {'AADARSH'.split('').map((letter, i) => (
            <motion.span
              key={i}
              className="name-letter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="name-dot"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.p
          className="loading-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Full-Stack Developer
        </motion.p>

        <motion.div
          className="loading-bar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
