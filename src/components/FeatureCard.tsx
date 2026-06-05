import { useRef } from 'react'
import { type LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const col = index % 4

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, rotate: 0.5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: col * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      className="group bg-white dark:bg-[#141820] rounded-2xl p-6 border border-gray-100 dark:border-white/[0.06] cursor-default"
      style={{ boxShadow: 'var(--card-shadow)' }}
    >
      <div className="w-11 h-11 rounded-xl bg-surface-accent dark:bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
        <Icon size={20} className="text-primary" strokeWidth={1.75} />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
