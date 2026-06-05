import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Vision() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #f8faf9 0%, #eef6f4 60%, #f8faf9 100%)' }}
      aria-labelledby="vision-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            The vision
          </p>
          <h2
            id="vision-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6"
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
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Momento is not meant to replace Apple Photos. It adds a more intentional layer on top of it. You keep your photos where they belong, but use Momento to create curated, emotional and reusable memories.
          </p>

          {/* Visual accent */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3">
              <div
                className="px-4 py-2 rounded-full text-sm text-gray-500 border border-gray-200 bg-white"
              >
                Apple Photos
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <div className="w-6 h-px bg-gray-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-6 h-px bg-gray-300" />
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
          </div>
        </div>
      </div>
    </section>
  )
}
