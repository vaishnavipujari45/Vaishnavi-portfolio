import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-canvas flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-16 w-16">
              <svg viewBox="0 0 64 64" className="h-16 w-16">
                <circle cx="32" cy="32" r="28" stroke="#1E293B" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="176"
                  initial={{ strokeDashoffset: 176 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.1, ease: 'easeInOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center mono-tag text-[10px] text-accent-soft">
                DA
              </div>
            </div>
            <div className="mono-tag text-xs text-muted tracking-widest uppercase">
              Loading dashboard…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
