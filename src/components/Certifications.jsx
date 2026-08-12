import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Award, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { certifications, certCategoryData } from '../data/resumeData.js'

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0]
  return (
    <div className="glass rounded-lg px-3 py-2 border border-line">
      <p className="text-ink text-sm font-medium">{d.name}</p>
      <p className="mono-tag text-xs text-accent-soft">{d.value} certification</p>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="06 · Certifications"
          title="Verified credentials"
          description="Formal training layered on top of project work, grouped by category."
        />

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.08}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-xl p-5 flex flex-col gap-3 h-full hover:border-accent-soft/40 border border-transparent transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent-soft" />
                  </div>
                  <div>
                    <p className="text-ink text-sm font-medium leading-snug">{cert.title}</p>
                    <p className="mono-tag text-[10px] text-muted uppercase mt-1.5">{cert.category}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs text-accent-soft group-hover:gap-1.5 transition-all">
                    View certificate <ExternalLink className="h-3 w-3" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="glass rounded-2xl p-6 flex flex-col">
            <p className="mono-tag text-[11px] text-muted uppercase mb-4">By category</p>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={certCategoryData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={95}
                    paddingAngle={4}
                  >
                    {certCategoryData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} stroke="#070B14" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {certCategoryData.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-ink/80">{c.name}</span>
                  </div>
                  <span className="mono-tag text-xs text-muted">{c.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
