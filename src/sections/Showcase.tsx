import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import DeviceFrame from '../components/DeviceFrame'
import phoneDetail from '../assets/screens/iPhone_detail.jpg'
import phoneImages from '../assets/screens/iPhone_images.jpg'
import phoneEdit from '../assets/screens/iPhone_edit.jpg'
import phoneTimeCapsule from '../assets/screens/iPhone_timecapsule.jpg'
import phoneOpenLater from '../assets/screens/iPhone_open_later.jpg'

const entrance = [0.32, 0.72, 0, 1] as const

const screens = [
  {
    src: phoneDetail,
    label: 'Moment',
    caption: 'The story, the mood, the people and the place — all on one screen.',
    alt: 'A moment in Momento showing its story, mood, people and location on a map',
  },
  {
    src: phoneImages,
    label: 'Photos',
    caption: 'Mark best shots and favorites, and watch the moment reach completion.',
    alt: 'The photo grid of a moment with best shot and favorite markers',
  },
  {
    src: phoneEdit,
    label: 'Edit',
    caption: 'Set the title, the dates and the layout as the moment takes shape.',
    alt: 'The Edit Moment sheet with date range and layout options',
  },
  {
    src: phoneTimeCapsule,
    label: 'Time Capsule',
    caption: 'Seal a memory and set the date it comes back to you.',
    alt: 'The Time Capsule screen listing scheduled reminders',
  },
  {
    src: phoneOpenLater,
    label: 'Open later',
    caption: 'Get a reminder, or seal a memory shut until the date you pick.',
    alt: 'The Open Later sheet offering a reminder or a sealed memory, with date options',
  },
]

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 md:py-30 bg-onyx" aria-labelledby="showcase-heading" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <span className="tag-ghost">
            <span className="accent-dot" style={{ width: 6, height: 6 }} />
            The app
          </span>
          <span className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {String(screens.length).padStart(2, '0')} screens
          </span>
        </div>

        <motion.h2
          id="showcase-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: entrance }}
          className="display display-fade-hero mb-12"
          style={{ fontSize: 'clamp(56px, 8vw, 112px)' }}
        >
          See it in hand
        </motion.h2>
      </div>

      {/* Full-bleed strip — the screen is the card, no chrome around it */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-3 px-6 md:px-12 w-max mx-auto">
          {screens.map((screen, i) => (
            <motion.figure
              key={screen.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: entrance }}
              className="flex flex-col gap-6 w-[228px] shrink-0"
            >
              <div className="media">
                <DeviceFrame src={screen.src} alt={screen.alt} width={228} />
              </div>
              <figcaption className="flex flex-col gap-1.5">
                <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {String(i + 1).padStart(2, '0')} — {screen.label}
                </span>
                <span className="text-micro leading-[1.4]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {screen.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
