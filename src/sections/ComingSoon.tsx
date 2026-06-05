import { Cloud, Users, CalendarDays, LayoutTemplate, MapPin, Share } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const upcoming = [
  { icon: Cloud, title: 'iCloud Sync', description: 'Keep your moments safe and in sync across all your devices.' },
  { icon: Users, title: 'Shared Moments', description: 'Invite friends and family to contribute to a shared memory.' },
  { icon: CalendarDays, title: 'Yearly Recap', description: 'Revisit your year through a curated collection of your best moments.' },
  { icon: LayoutTemplate, title: 'Widgets', description: 'See a random memory on your home screen every day.' },
  { icon: MapPin, title: 'Memory Map', description: 'Explore your moments on an interactive map by location.' },
  { icon: Share, title: 'Share Cards', description: 'Export beautiful memory cards to share with friends.' },
]

export default function ComingSoon() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      className="py-24 md:py-32 bg-white"
      aria-labelledby="coming-soon-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="On the horizon"
            title="What comes next"
            subtitle="These features are part of the Momento vision. They are not available yet, but they are on the way."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map(({ icon: Icon, title, description }, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useScrollReveal<HTMLDivElement>(((i % 3) + 1) as 1 | 2 | 3)
            return (
              <div
                key={title}
                ref={ref}
                className="relative rounded-2xl bg-surface p-6 border border-gray-100 overflow-hidden"
              >
                {/* Coming soon badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gray-200 text-gray-400 bg-white">
                    Soon
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                  <Icon size={18} className="text-gray-400" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-gray-700 text-[15px] mb-1.5 tracking-tight pr-12">
                  {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
