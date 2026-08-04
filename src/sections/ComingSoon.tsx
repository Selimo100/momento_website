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
      transition={{ duration: 0.6, delay: col * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="card p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <Icon size={18} className="text-ink-3" strokeWidth={1.75} />
        <span className="tag-ghost" style={{ background: 'transparent', borderColor: 'var(--s-line-soft)', color: 'var(--s-ink-3)' }}>
          Soon
        </span>
      </div>
      <h3 className="text-body-sm text-ink-2 mb-1.5">{title}</h3>
      <p className="text-micro text-ink-3 leading-[1.4]">{description}</p>
    </motion.div>
  )
}

export default function ComingSoon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 md:py-30 bg-canvas" aria-labelledby="coming-soon-heading" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="On the horizon"
          id="coming-soon-heading"
          ghost="Next"
          title="What comes next"
          subtitle="These features are part of the Momento vision. They are not available yet, but they are on the way."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
