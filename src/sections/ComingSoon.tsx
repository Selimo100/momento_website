import { useRef } from 'react'
import { Cloud, Users, CalendarDays, LayoutTemplate, MapPin, Share, type LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const upcoming = [
  {
    icon: Cloud,
    title: 'iCloud Sync',
    description: 'Keep your moments safe and in sync across all your devices.',
  },
  {
    icon: Users,
    title: 'Shared Moments',
    description: 'Invite friends and family to contribute to a shared memory.',
  },
  {
    icon: CalendarDays,
    title: 'Yearly Recap',
    description: 'Revisit your year through a curated collection of your best moments.',
  },
  {
    icon: LayoutTemplate,
    title: 'Widgets',
    description: 'See a random memory on your home screen every day.',
  },
  {
    icon: MapPin,
    title: 'Memory Map',
    description: 'Explore your moments on an interactive map by location.',
  },
  {
    icon: Share,
    title: 'Share Cards',
    description: 'Export beautiful memory cards to share with friends.',
  },
]

interface ComingSoonCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
  inView: boolean
}

function ComingSoonCard({ icon: Icon, title, description, index, inView }: ComingSoonCardProps) {
  const col = index % 3
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: col * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative rounded-2xl bg-surface dark:bg-[#0f1219] p-6 border border-gray-100 dark:border-white/[0.05] overflow-hidden"
    >
      <div className="absolute top-4 right-4">
        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-400 bg-white dark:bg-white/5">
          Soon
        </span>
      </div>
      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4 border border-gray-100 dark:border-white/05">
        <Icon size={18} className="text-gray-400 dark:text-gray-500" strokeWidth={1.75} />
      </div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-[15px] mb-1.5 tracking-tight pr-12">
        {title}
      </h3>
      <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function ComingSoon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-24 md:py-32 bg-white dark:bg-[#0b0e16]"
      aria-labelledby="coming-soon-heading"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="On the horizon"
          title="What comes next"
          subtitle="These features are part of the Momento vision. They are not available yet, but they are on the way."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map(({ icon, title, description }, i) => (
            <ComingSoonCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
