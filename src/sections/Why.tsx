import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Why() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            The idea
          </p>
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6"
          >
            Why Momento exists
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Apple Photos is great for storing everything.
            <span className="text-gray-700 font-normal">
              {' '}Momento is made for the moments you actually want to remember.
            </span>
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mt-5 max-w-2xl mx-auto">
            Instead of keeping hundreds of random pictures, Momento helps you build small, meaningful memories with stories, favorite shots, moods, people, places and notes.
          </p>

          {/* Decorative quote line */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-8 h-8 rounded-xl bg-surface-accent flex items-center justify-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: 'linear-gradient(135deg, #a0c1b9, #5a9289)' }}
              />
            </div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
