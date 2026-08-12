import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, LineChart, Database, Wrench, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import { technicalSkillCategories } from '../data/resumeData.js'

const iconFor = {
  programming: Code2,
  visualization: LineChart,
  database: Database,
  tools: Wrench,
  concepts: Sparkles,
}

export default function TechnicalSkills() {
  const [activeId, setActiveId] = useState(technicalSkillCategories[0].id)
  const active = technicalSkillCategories.find((c) => c.id === activeId)

  return (
    <section id="technical-skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="03 · Technical Skills"
          title="The stack, mapped"
          description="Tap a node to explore each category — grouped by role, not ranked by score."
        />

        <div className="glass rounded-2xl p-6 md:p-10 grid md:grid-cols-[1fr_1fr] gap-8 items-center">
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {technicalSkillCategories.map((cat) => (
                <line
                  key={cat.id}
                  x1={50}
                  y1={50}
                  x2={cat.pos.x}
                  y2={cat.pos.y}
                  stroke={cat.color}
                  strokeWidth={activeId === cat.id ? 0.7 : 0.35}
                  opacity={activeId === cat.id ? 0.7 : 0.25}
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full glass border border-accent-soft/40 flex items-center justify-center text-center z-10">
              <span className="mono-tag text-[9px] text-accent-soft leading-tight uppercase">
                Tech
                <br />
                Stack
              </span>
            </div>

            {technicalSkillCategories.map((cat) => {
              const Icon = iconFor[cat.id]
              const isActive = activeId === cat.id
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    setActiveId(cat.id)
                  }}
                  style={{
                    left: `${cat.pos.x}%`,
                    top: `${cat.pos.y}%`,
                    x: '-50%',
                    y: '-50%',
                  }}
                  className="absolute flex flex-col items-center gap-1 z-20"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  aria-pressed={isActive}
                  aria-label={cat.name}
                >
                  <span
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center border-2 transition-colors"
                    style={{
                      borderColor: cat.color,
                      backgroundColor: isActive ? `${cat.color}2A` : '#0E1526',
                      boxShadow: isActive ? `0 0 24px -4px ${cat.color}` : 'none',
                    }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: cat.color }} />
                  </span>
                  <span className="hidden sm:block mono-tag text-[9px] text-muted uppercase text-center max-w-[80px] leading-tight">
                    {cat.name}
                  </span>
                </motion.button>
              )
            })}
          </div>

          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: active.color }} />
                  <p className="mono-tag text-[11px] text-muted uppercase">{active.name}</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {active.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="px-3.5 py-2 rounded-full text-sm text-ink border"
                      style={{ borderColor: `${active.color}55`, backgroundColor: `${active.color}14` }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
