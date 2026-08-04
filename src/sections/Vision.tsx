import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import DeviceFrame from '../components/DeviceFrame'
import tabletDetail from '../assets/screens/iPad_detail.jpg'

const entrance = [0.32, 0.72, 0, 1] as const

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 md:py-30 bg-wash overflow-hidden" aria-labelledby="vision-heading">
      {/* Ghosted watermark */}
      <span
        aria-hidden
        className="display display-ghost absolute -bottom-6 left-0 right-0 text-center select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(96px, 20vw, 260px)' }}
      >
        Momento
      </span>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: entrance }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">The vision</span>
            <span className="rule flex-1" />
          </div>

          <h2
            id="vision-heading"
            className="display display-fade max-w-[16ch]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
          >
            Not a photo library. A memory builder.
          </h2>

          <p className="mt-12 text-body-sm md:text-body text-ink-2 max-w-[56ch]">
            Momento is not meant to replace Apple Photos. It adds a more intentional layer on top of
            it. You keep your photos where they belong, but use Momento to create curated, emotional
            and reusable memories.
          </p>

          {/* Relationship diagram — two labels, one hairline, one live dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: entrance }}
            className="mt-12 flex items-center gap-3"
          >
            <span className="mono text-micro text-ink-3">Apple Photos</span>
            <span className="rule flex-1 max-w-[120px]" />
            <motion.span
              className="accent-dot"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="rule flex-1 max-w-[120px]" />
            <span className="tag">Momento</span>
          </motion.div>
        </motion.div>

        {/* The same memory, at desk scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: entrance }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <div className="media w-full flex justify-center">
            <DeviceFrame
              src={tabletDetail}
              alt="A Momento memory open on iPad, showing its story, photos and map"
              device="tablet"
              surface="theme"
              width={880}
            />
          </div>
          <span className="mono text-micro text-ink-3">Momento on iPad</span>
        </motion.div>
      </div>
    </section>
  )
}
