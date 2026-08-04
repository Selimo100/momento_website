import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const entrance = [0.32, 0.72, 0, 1] as const

export default function Why() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-30 bg-canvas" aria-labelledby="why-heading">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: entrance }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">The idea</span>
            <span className="rule flex-1" />
            <span className="mono text-micro text-ink-3">01 / 04</span>
          </div>

          <h2
            id="why-heading"
            className="display display-fade max-w-[14ch]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
          >
            Why Momento exists
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <p className="text-body text-ink-2 max-w-[38ch]">
              Apple Photos is great for storing everything.{' '}
              <span className="text-ink">
                Momento is made for the moments you actually want to remember.
              </span>
            </p>
            <p className="text-body-sm text-ink-2 max-w-[52ch] md:justify-self-end">
              Instead of keeping hundreds of random pictures, Momento helps you build small,
              meaningful memories with stories, favorite shots, moods, people, places and notes.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="accent-dot" />
            <span className="rule flex-1" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
