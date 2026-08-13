import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { profile } from '../data/resumeData.js'

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'View repositories', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="08 · Contact"
          title="Let's connect"
          description="I'm open to opportunities, collaborations, and conversations about data analytics."
        />

        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
            <div className="relative grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                  Ready to turn data into meaningful insights?
                </h3>
                <p className="text-muted mt-3 max-w-md leading-relaxed">
                  Explore my projects, view my resume, or get in touch to discuss opportunities in data analytics.
                </p>
                <a
                  href={profile.resumeFile}
                  download
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent-soft transition-colors text-sm font-medium text-white shadow-glow"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="rounded-xl border border-line p-4 flex items-center gap-3 hover:border-accent-soft/50 hover:bg-panel2 transition-colors"
                  >
                    <div className="h-9 w-9 rounded-lg bg-panel2 flex items-center justify-center shrink-0">
                      <l.icon className="h-4 w-4 text-accent-soft" />
                    </div>
                    <div className="min-w-0">
                      <p className="mono-tag text-[10px] text-muted uppercase">{l.label}</p>
                      <p className="text-ink text-sm truncate">{l.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
