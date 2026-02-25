import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import CursorFollower from './components/CursorFollower'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import './styles/main.css'

function App() {
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    window.lenis = lenisInstance

    function raf(time: DOMHighResTimeStamp) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
      window.lenis = undefined
    }
  }, [])

  return (
    <div className="app">
      <CursorFollower />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="container section footer">
        <div className="line-divider" style={{ marginBottom: '2rem' }}></div>
        <div className="footer-content">
          <p className="text-huge" style={{ fontSize: '2rem' }}>AADARSH<span className="text-coral">.</span>DEV</p>
        </div>
        <div className="footer-links text-mono">
          <a href="#work" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#work') }}>Work</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#experience') }}>Exp</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#contact') }}>Talk</a>
        </div>
        <p className="text-mono" style={{ opacity: 0.5 }}>© 2026 Crafted with Precision</p>
      </footer>
    </div>
  )
}

export default App
