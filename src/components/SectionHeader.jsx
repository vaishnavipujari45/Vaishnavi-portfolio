import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulseDot" />
        <span className="mono-tag text-xs text-accent-cyan uppercase">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted max-w-2xl text-sm md:text-base">{description}</p>
      )}
    </Reveal>
  )
}
