import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface UseCaseCardProps {
  title: string
  description: string
  gradient: string
  index: number
}

export default function UseCaseCard({ title, description, gradient, index }: UseCaseCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const col = index % 4

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: col * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -5,
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#141820] cursor-default"
      style={{ boxShadow: 'var(--card-shadow)' }}
    >
      <div className={`h-1.5 w-full ${gradient}`} />
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
