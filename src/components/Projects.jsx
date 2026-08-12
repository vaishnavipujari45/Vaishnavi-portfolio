import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects, projectFilters } from '../data/resumeData.js'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="05 · Project Portfolio"
          title="Dashboards & analyses"
          description="Filter by tool to see exactly how each stack was used end to end."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-2 rounded-full text-xs mono-tag uppercase tracking-wide border transition-colors ${
                filter === f
                  ? 'text-canvas border-transparent'
                  : 'text-muted border-line hover:text-ink hover:border-accent-soft/40'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-cyan"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted text-sm">
            No projects tagged with "{filter}" yet — check back soon.
          </div>
        )}
      </div>
    </section>
  )
}
