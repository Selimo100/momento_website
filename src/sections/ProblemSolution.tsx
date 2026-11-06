import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  'Photos get lost in a huge library.',
  'Albums often feel unfinished.',
  'The story behind a memory is usually missing.',
]

const solutions = [
  'Create focused moments.',
  'Add context, people, mood and notes.',
  'Export the final memory back to Apple Photos.',
]

const entrance = [0.32, 0.72, 0, 1] as const

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-30 bg-wash" aria-labelledby="problem-heading">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12" ref={sectionRef}>
        <div className="flex items-center gap-3 mb-12">
          <span className="tag">The shift</span>
          <span className="rule flex-1" />
          <span className="mono text-micro text-ink-3">02 / 04</span>
        </div>

        <motion.h2
          id="problem-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: entrance }}
          className="display display-fade mb-12"
          style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
        >
          From chaos to clarity
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-3">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: entrance }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="mono text-micro text-ink-3">Before</span>
              <span className="mono text-micro text-ink-3">×</span>
            </div>
            <ul className="flex flex-col">
              {problems.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: entrance }}
                  className="py-3 flex items-baseline gap-3"
                  style={{ borderTop: '1px solid var(--s-line-soft)' }}
                >
                  <span className="mono text-micro text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-body-sm text-ink-2">{p}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Momento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18, ease: entrance }}
            className="card p-6 bg-inverse"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="tag-ghost">
                <span className="accent-dot" style={{ width: 6, height: 6 }} />
                With Momento
              </span>
            </div>
            <ul className="flex flex-col">
              {solutions.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.08, ease: entrance }}
                  className="py-3 flex items-baseline gap-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <span className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-body-sm text-fog">{s}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
