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
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl bg-surface-accent dark:bg-primary/10 flex items-center justify-center border border-primary/10 dark:border-primary/15">
          <Icon size={22} className="text-primary" strokeWidth={1.5} />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">{number}</span>
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] mb-1.5 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[160px]">
        {description}
      </p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-white dark:bg-[#0b0e16]"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-center mb-16"
          ref={ref}
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight"
          >
            Four steps to a memory
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line on desktop */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <StepCard key={step.title} {...step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
