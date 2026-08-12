import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import KPICard from './KPICard.jsx'
import { kpis, profile } from '../data/resumeData.js'

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-line glass">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulseDot" />
              <span className="mono-tag text-[11px] text-accent-cyan uppercase">Dashboard · Live</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-ink">
              {profile.name}
            </h1>
            <p className="mt-4 font-display text-xl md:text-2xl text-gradient font-semibold">
              {profile.role}
            </p>
            <p className="mt-5 text-muted text-base md:text-lg max-w-xl leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent-soft transition-colors text-sm font-medium text-white shadow-glow"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass hover:border-accent-soft/50 border border-line transition-colors text-sm font-medium text-ink"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass hover:border-accent-soft/50 border border-line transition-colors text-sm font-medium text-ink"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <div ref={ref} className="grid grid-cols-2 gap-4">
            {kpis.map((kpi, i) => (
              <KPICard key={kpi.id} kpi={kpi} index={i} inView={inView} />
            ))}
          </div>
        </div>

        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 mx-auto flex flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="mono-tag text-[11px] uppercase">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  )
}
