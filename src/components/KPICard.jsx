import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp.js'
import { TrendingUp } from 'lucide-react'

export default function KPICard({ kpi, index, inView }) {
  const decimals = kpi.value % 1 !== 0 ? 2 : 0
  const value = useCountUp(kpi.value, { start: inView, duration: 1400 + index * 150, decimals })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-5 relative overflow-hidden group"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="mono-tag text-[11px] text-muted uppercase tracking-wider">{kpi.label}</p>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-3xl md:text-4xl font-bold text-ink">{value}</span>
        {kpi.suffix && <span className="font-display text-lg text-accent-soft">{kpi.suffix}</span>}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-positive">
        <TrendingUp className="h-3.5 w-3.5" />
        <span className="mono-tag">{kpi.trend}</span>
      </div>
    </motion.div>
  )
}
