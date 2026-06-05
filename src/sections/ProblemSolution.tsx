import { useRef } from 'react'
import { X, Check } from 'lucide-react'
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

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      className="py-24 md:py-28"
      style={{ background: 'var(--alt-section-bg)' }}
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            The shift
          </p>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight"
          >
            From chaos to clarity
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-7"
            style={{
              background: 'var(--problem-card-bg)',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
                <X size={14} className="text-red-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-[13px] font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest">
                Before
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {problems.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-snug">{p}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-7"
            style={{
              background: 'var(--solution-card-bg)',
              border: '1px solid var(--solution-card-border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <Check size={14} className="text-primary-dark" strokeWidth={2.5} />
              </div>
              <h3 className="text-[13px] font-semibold text-primary uppercase tracking-widest">
                With Momento
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {solutions.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-200 text-[15px] leading-snug font-medium">{s}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
