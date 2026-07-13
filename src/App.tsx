import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import CodingProfiles from './sections/CodingProfiles'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import './styles/main.css'

// Lightweight native scroll helper (no inertia libraries that cause delay)
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <CodingProfiles />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          <footer className="container section footer">
            <div className="line-divider" style={{ marginBottom: '2rem' }}></div>
            <div className="footer-content">
              <p className="text-huge" style={{ fontSize: '2rem' }}>AADARSH<span className="text-coral">.</span>DEV</p>
            </div>
            <div className="footer-links text-mono">
              <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work') }}>Work</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>Exp</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Talk</a>
            </div>
            <p className="text-mono" style={{ opacity: 0.5 }}>© 2026 Crafted with Precision</p>
          </footer>
        </motion.div>
      )}
    </>
  )
}

export default App
