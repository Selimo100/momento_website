import { useRef } from 'react'
import { ShieldCheck, Server, BarChart2, Image, Fingerprint } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const badges = [
  { icon: ShieldCheck, label: 'No account' },
  { icon: Server, label: 'No backend' },
  { icon: BarChart2, label: 'No tracking' },
  { icon: Image, label: 'Apple Photos export' },
  { icon: Fingerprint, label: 'Face ID support' },
]

export default function PrivacyBadges() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-24 md:py-32 bg-gray-950 dark:bg-[#05070e]"
      aria-labelledby="privacy-section-heading"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              Privacy
            </p>
            <h2
              id="privacy-section-heading"
              className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-5"
            >
              Private by design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Momento is built local-first. There is no account, no backend, no tracking and no cloud upload. Your moments stay on your device.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mt-4">
              Photos are only accessed when you choose them, and exports happen only when you decide to save them to Apple Photos.
            </p>
          </motion.div>

          {/* Badges */}
          <div className="flex flex-col gap-3">
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-4 rounded-2xl px-5 py-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(160,193,185,0.12)' }}
                >
                  <Icon size={18} className="text-primary" strokeWidth={1.75} />
                </div>
                <span className="text-[15px] font-medium text-gray-200">{label}</span>
                <motion.div
                  className="ml-auto w-2 h-2 rounded-full bg-primary/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
