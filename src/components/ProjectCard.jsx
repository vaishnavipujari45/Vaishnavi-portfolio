import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden border border-line hover:border-accent-soft/40 transition-colors group flex flex-col"
    >
      <div
        className="h-36 relative flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}22, #0E1526)` }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative flex gap-2">
          {[40, 65, 30, 80, 50].map((h, i) => (
            <motion.span
              key={i}
              className="w-3 rounded-t-sm"
              style={{ backgroundColor: project.accent, height: `${h}px` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            />
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="mono-tag text-[10px] uppercase px-2 py-1 rounded-full bg-panel2 text-accent-soft border border-line"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="text-xs text-muted mt-1">{project.subtitle}</p>
        <p className="text-sm text-ink/80 mt-3 leading-relaxed">{project.description}</p>

        <div className="mt-4">
          <p className="mono-tag text-[10px] text-muted uppercase mb-2">Key Features</p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-positive mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-line">
          {project.insights.map((ins) => (
            <div key={ins.label}>
              <p className="mono-tag text-[9px] text-muted uppercase leading-tight">{ins.label}</p>
              <p className="text-xs text-ink font-medium mt-0.5">{ins.value}</p>
            </div>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-panel2 hover:bg-accent/20 border border-line hover:border-accent-soft/50 transition-colors text-sm text-ink font-medium"
        >
          <Github className="h-4 w-4" /> View Repository
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  )
}
