import { Database, LineChart, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { profile } from '../data/resumeData.js'

const highlights = [
  { icon: Database, label: 'Data Cleaning & EDA', desc: 'Structuring messy, real-world datasets into analysis-ready tables.' },
  { icon: LineChart, label: 'Dashboarding', desc: 'Power BI & Excel dashboards that track KPIs recruiters actually ask about.' },
  { icon: Sparkles, label: 'Actionable Insight', desc: 'Translating query output into a decision, not just a chart.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="01 · Profile"
          title="About me"
          description="A quick snapshot of my background, skills, and journey into data analytics."
        />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <Reveal delay={0.05} className="glass rounded-2xl p-7 md:p-9">
            <p className="mono-tag text-[11px] text-accent-cyan uppercase mb-4">Summary.txt</p>
            <p className="text-ink/90 text-base md:text-lg leading-relaxed">{profile.summary}</p>
            <div className="mt-6 pt-6 border-t border-line flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <span className="text-muted">Based in </span>
                <span className="text-ink">{profile.location}</span>
              </div>
              <div>
                <span className="text-muted">Education </span>
                <span className="text-ink">B.E. CS (AI & ML), VTU</span>
              </div>
              <div>
                <span className="text-muted">CGPA </span>
                <span className="text-ink">8.16 / 10</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={0.1 + i * 0.08}>
                <div className="glass rounded-xl p-5 flex items-start gap-4 hover:border-accent-soft/40 border border-transparent transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <h.icon className="h-5 w-5 text-accent-soft" />
                  </div>
                  <div>
                    <p className="text-ink font-medium text-sm">{h.label}</p>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
