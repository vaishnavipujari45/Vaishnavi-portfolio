import { ChevronRight, BarChart3, Code2, LineChart, Database, Wrench } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { analyticsFocusAreas } from '../data/resumeData.js'

const iconFor = {
  'Data Analysis': BarChart3,
  Programming: Code2,
  'Data Visualization': LineChart,
  Database: Database,
  Tools: Wrench,
}

export default function SkillsAnalytics() {
  return (
    <section id="analytics" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="04 · Analytics Focus"
          title="How the work flows"
          description="The areas that make up day-to-day analysis work, laid out as a pipeline rather than a scoreboard."
        />

        <div className="glass rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
            {analyticsFocusAreas.map((area, i) => {
              const Icon = iconFor[area.name]
              const isLast = i === analyticsFocusAreas.length - 1
              return (
                <div key={area.name} className="flex flex-col md:flex-row items-center flex-1 gap-3 md:gap-2">
                  <Reveal delay={i * 0.08} className="w-full flex-1">
                    <div className="glass rounded-xl p-5 h-full flex flex-col items-center text-center gap-2.5 border border-transparent hover:border-accent-soft/40 transition-colors">
                      <span
                        className="h-11 w-11 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${area.color}22` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: area.color }} />
                      </span>
                      <p className="text-ink text-sm font-medium">{area.name}</p>
                      <p className="text-muted text-xs leading-relaxed">{area.blurb}</p>
                    </div>
                  </Reveal>

                  {!isLast && (
                    <ChevronRight className="hidden md:block h-4 w-4 text-muted shrink-0 rotate-90 md:rotate-0" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
