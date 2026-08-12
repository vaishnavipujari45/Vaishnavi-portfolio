import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, Menu, X } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = tabs.map((t) => document.getElementById(t.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/80 glass border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <button onClick={() => goTo('home')} className="flex items-center gap-2 group">
          <LayoutDashboard className="h-5 w-5 text-accent-soft" />
          <span className="font-display font-semibold text-ink text-sm tracking-tight">
            VP<span className="text-accent-cyan">.</span>analytics
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => goTo(t.id)}
              className={`relative px-3 py-2 text-xs mono-tag uppercase tracking-wide rounded-md transition-colors ${
                active === t.id ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {active === t.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-panel2 border border-line rounded-md"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 mono-tag text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-positive animate-pulseDot" />
          <span>STATUS: OPEN TO WORK</span>
        </div>

        <button className="lg:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-canvas/95 glass border-b border-line px-5 pb-4"
        >
          <div className="flex flex-col gap-1 pt-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => goTo(t.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm mono-tag uppercase tracking-wide ${
                  active === t.id ? 'bg-panel2 text-ink' : 'text-muted'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
