import { useRef } from 'react'
import { PlusSquare, Images, MessageSquare, Share2, type LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    icon: PlusSquare,
    number: '01',
    title: 'Create a Moment',
    description: 'Give it a title, date and description.',
  },
  {
    icon: Images,
    number: '02',
    title: 'Add your photos',
    description: 'Select pictures from Apple Photos.',
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Tell the story',
    description: 'Add mood, people, location and notes.',
  },
  {
    icon: Share2,
    number: '04',
    title: 'Export or revisit',
    description: 'Export to Apple Photos or rediscover it later.',
  },
]

const entrance = [0.32, 0.72, 0, 1] as const

interface StepCardProps {
  icon: LucideIcon
  number: string
  title: string
  description: string
  index: number
  inView: boolean
}

function StepCard({ icon: Icon, number, title, description, index, inView }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: entrance }}
      className="card p-6"
    >
      <div className="flex items-center justify-between mb-12">
        <span className="display text-heading-sm text-ink">{number}</span>
        <Icon size={18} className="text-ink-3" strokeWidth={1.5} />
      </div>
      <h3 className="text-body-sm text-ink mb-1.5">{title}</h3>
      <p className="text-micro text-ink-2 leading-[1.4] max-w-[28ch]">{description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" className="py-24 md:py-30 bg-card" aria-labelledby="how-heading">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12" ref={ref}>
          <span className="tag">How it works</span>
          <span className="rule flex-1" />
          <span className="mono text-micro text-ink-3">04 / 04</span>
        </div>

        <motion.h2
          id="how-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: entrance }}
          className="display display-fade mb-12"
          style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
        >
          Four steps to a memory
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <StepCard key={step.title} {...step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
