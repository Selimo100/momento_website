import { X, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

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
  const leftRef = useScrollReveal<HTMLDivElement>(1)
  const rightRef = useScrollReveal<HTMLDivElement>(2)

  return (
    <section
      className="py-24 md:py-28"
      style={{ background: 'linear-gradient(180deg, #f8faf9 0%, #eef6f4 100%)' }}
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-lg mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            The shift
          </p>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            From chaos to clarity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Problem */}
          <div
            ref={leftRef}
            className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                <X size={14} className="text-red-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest">
                Before
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-[15px] leading-snug">{p}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            ref={rightRef}
            className="rounded-2xl border p-7 shadow-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(160,193,185,0.10) 0%, rgba(160,193,185,0.04) 100%)',
              borderColor: 'rgba(160,193,185,0.4)',
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
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-[15px] leading-snug font-medium">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
