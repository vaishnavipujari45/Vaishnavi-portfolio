import { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import TechnicalSkills from './components/TechnicalSkills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-canvas min-h-screen font-body">
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechnicalSkills />
        <Projects />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
