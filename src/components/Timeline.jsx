import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, FolderKanban } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { timeline } from '../data/resumeData.js'

const typeMeta = {
  experience: { icon: Briefcase, color: '#3B82F6', label: 'Experience' },
  project: { icon: FolderKanban, color: '#22D3EE', label: 'Project' },
  education: { icon: GraduationCap, color: '#34D399', label: 'Education' },
}

const filters = [
  { id: 'all', label: 'All' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

export default function Timeline() {
  const [filter, setFilter] = useState('all')
  const items = filter === 'all' ? timeline : timeline.filter((t) => t.type === filter)

  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="07 · Career Timeline"
          title="My journey so far"
          description="Education, internships, and projects that have shaped my path into data analytics."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs mono-tag uppercase tracking-wide border transition-colors ${
                filter === f.id
                  ? 'bg-panel2 text-ink border-accent-soft/50'
                  : 'text-muted border-line hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-8">
            {items.map((item, i) => {
              const meta = typeMeta[item.type]
              const Icon = meta.icon
              return (
                <Reveal key={item.id} delay={i * 0.06} className="relative">
                  <motion.span
                    className="absolute -left-8 md:-left-10 top-1 h-4 w-4 rounded-full border-2"
                    style={{ borderColor: meta.color, backgroundColor: '#070B14' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  />
                  <div className="glass rounded-xl p-5 md:p-6 hover:border-accent-soft/40 border border-transparent transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] mono-tag uppercase px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
                      >
                        <Icon className="h-3 w-3" /> {meta.label}
                      </span>
                      <span className="mono-tag text-[11px] text-muted">{item.date}</span>
                    </div>
                    <h3 className="font-display text-base md:text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent-soft mt-0.5">{item.org}</p>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((p) => (
                        <li key={p} className="text-sm text-ink/75 flex gap-2">
                          <span className="text-muted">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
