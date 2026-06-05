import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Why() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#0b0e16]" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            The idea
          </p>
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight leading-tight mb-6"
          >
            Why Momento exists
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 dark:text-gray-500 font-light leading-relaxed">
            Apple Photos is great for storing everything.
            <span className="text-gray-700 dark:text-gray-300 font-normal">
              {' '}Momento is made for the moments you actually want to remember.
            </span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mt-5 max-w-2xl mx-auto">
            Instead of keeping hundreds of random pictures, Momento helps you build small, meaningful memories with stories, favorite shots, moods, people, places and notes.
          </p>

          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/30" />
            <motion.div
              className="w-8 h-8 rounded-xl bg-surface-accent dark:bg-primary/10 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: 'linear-gradient(135deg, #a0c1b9, #5a9289)' }}
              />
            </motion.div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
