import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import DeviceFrame from '../components/DeviceFrame'
import AppStoreBadge from '../components/AppStoreBadge'
import phoneTimecapsule from '../assets/screens/iPhone_timecapsule.jpg'

const entrance = [0.32, 0.72, 0, 1] as const

export default function Download() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="download"
      className="relative py-20 md:py-30 bg-onyx overflow-hidden"
      aria-labelledby="download-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(160,192,185,0.16), transparent 70%)',
        }}
      />

      <div
        ref={ref}
        className="relative max-w-[1200px] mx-auto px-6 md:px-12 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: entrance }}
        >
          <span className="tag-ghost">
            <motion.span
              className="accent-dot"
              style={{ width: 6, height: 6 }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available now
          </span>

          <h2
            id="download-heading"
            className="display display-fade-hero max-w-[12ch] mt-8 md:mt-12"
            style={{ fontSize: 'clamp(52px, 8vw, 112px)' }}
          >
            Get Momento on the App Store.
          </h2>

          <p className="mt-8 md:mt-12 text-body-sm md:text-body max-w-[46ch]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Start building the moments you actually want to remember. Free to download for iPhone
            and iPad — your photos never leave your device.
          </p>

          <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-6">
            <AppStoreBadge tone="light" size="lg" />
            <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.45)' }}>
              iPhone · iPad
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: entrance }}
          className="hidden lg:flex justify-center"
        >
          <div className="scale-90 origin-center">
            <DeviceFrame
              src={phoneTimecapsule}
              alt="A Momento time capsule on iPhone"
              width={264}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
