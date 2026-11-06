import { useRef } from 'react'
import { type LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

const entrance = [0.32, 0.72, 0, 1] as const

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const col = index % 4

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: col * 0.07, ease: entrance }}
      whileHover={{ y: -2, transition: { duration: 0.3, ease: entrance } }}
      className="group card p-6 flex flex-col cursor-default"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <Icon size={18} className="text-ink-2" strokeWidth={1.75} />
        <span className="mono text-micro text-ink-3">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-body-sm text-ink mb-1.5">{title}</h3>
      <p className="text-micro text-ink-2 leading-[1.4]">{description}</p>

      {/* Alive signal on hover — the sole chromatic note */}
      <span className="accent-dot mt-4.5 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
