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

const entrance = [0.32, 0.72, 0, 1] as const

export default function PrivacyBadges() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 md:py-30 bg-onyx"
      aria-labelledby="privacy-section-heading"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <span className="tag-ghost">
            <span className="accent-dot" style={{ width: 6, height: 6 }} />
            Privacy
          </span>
          <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
            03 / 04
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: entrance }}
          >
            <h2
              id="privacy-section-heading"
              className="display display-fade-hero"
              style={{ fontSize: 'clamp(56px, 8vw, 112px)' }}
            >
              Private by design
            </h2>
            <p className="mt-6 text-body-sm max-w-[52ch]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Momento is built local-first. There is no account, no backend, no tracking and no
              cloud upload. Your moments stay on your device.
            </p>
            <p className="mt-3 text-body-sm max-w-[52ch]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Photos are only accessed when you choose them, and exports happen only when you decide
              to save them to Apple Photos.
            </p>
          </motion.div>

          {/* Badge list — hairline rows, no cards */}
          <div className="flex flex-col">
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: entrance }}
                className="flex items-center gap-3 py-4.5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon size={16} style={{ color: 'rgba(255,255,255,0.6)' }} strokeWidth={1.75} />
                <span className="text-body-sm text-fog">{label}</span>
                <motion.span
                  className="accent-dot ml-auto"
                  animate={{ opacity: [0.4, 1, 0.4] }}
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
