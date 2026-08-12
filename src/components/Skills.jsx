import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data/resumeData.js'

function SkillBar({ skill, index, inView }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-ink text-sm font-medium">{skill.name}</span>
        <span className="mono-tag text-xs text-accent-soft">
          {inView ? skill.level : 0}%
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-panel2 overflow-hidden border border-line">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="02 · Skill Matrix"
          title="Tools of the trade"
          description="A snapshot of the tools I've worked with through projects and practice."
        />
        <div ref={ref} className="glass rounded-2xl p-7 md:p-10 grid md:grid-cols-2 gap-x-10 gap-y-7">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
