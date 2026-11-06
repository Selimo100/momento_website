import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface UseCaseCardProps {
  title: string
  description: string
  /** Mono metadata label shown above the title */
  label: string
  index: number
}

const entrance = [0.32, 0.72, 0, 1] as const

export default function UseCaseCard({ title, description, label, index }: UseCaseCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const col = index % 4

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: col * 0.07, ease: entrance }}
      whileHover={{ y: -2, transition: { duration: 0.3, ease: entrance } }}
      className="group card p-6 cursor-default"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <span className="mono text-micro text-ink-3">{label}</span>
        <span className="mono text-micro text-ink-3">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-body-sm text-ink mb-1.5">{title}</h3>
      <p className="text-micro text-ink-2 leading-[1.4]">{description}</p>
    </motion.div>
  )
}
