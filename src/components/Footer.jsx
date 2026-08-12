import { profile } from '../data/resumeData.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono-tag text-[11px] text-muted">
          © {new Date().getFullYear()} {profile.name} — Built with React, Tailwind & Recharts.
        </p>
        <p className="mono-tag text-[11px] text-muted">Dashboard v1.0 · Last updated 2026</p>
      </div>
    </footer>
  )
}
