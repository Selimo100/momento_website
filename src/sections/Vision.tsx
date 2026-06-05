import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: 'var(--alt-section-bg2)' }}
      aria-labelledby="vision-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            The vision
          </p>
          <h2
            id="vision-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight leading-tight mb-6"
          >
            Not a photo library.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a0c1b9 0%, #5a9289 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A memory builder.
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Momento is not meant to replace Apple Photos. It adds a more intentional layer on top of it. You keep your photos where they belong, but use Momento to create curated, emotional and reusable memories.
          </p>

          {/* Visual concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                Apple Photos
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <div className="w-6 h-px bg-gray-300 dark:bg-gray-700" />
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="w-6 h-px bg-gray-300 dark:bg-gray-700" />
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  background: 'linear-gradient(135deg, rgba(160,193,185,0.12) 0%, rgba(160,193,185,0.06) 100%)',
                  borderColor: 'rgba(160,193,185,0.4)',
                  color: '#3d5a52',
                }}
              >
                Momento
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
