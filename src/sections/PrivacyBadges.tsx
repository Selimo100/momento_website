import { ShieldCheck, Server, BarChart2, Image, Fingerprint } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const badges = [
  { icon: ShieldCheck, label: 'No account' },
  { icon: Server, label: 'No backend' },
  { icon: BarChart2, label: 'No tracking' },
  { icon: Image, label: 'Apple Photos export' },
  { icon: Fingerprint, label: 'Face ID support' },
]

export default function PrivacyBadges() {
  const ref = useScrollReveal<HTMLDivElement>()
  const badgesRef = useScrollReveal<HTMLDivElement>(1)

  return (
    <section
      className="py-24 md:py-32 bg-gray-900"
      aria-labelledby="privacy-section-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div ref={ref}>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              Privacy
            </p>
            <h2
              id="privacy-section-heading"
              className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-5"
            >
              Private by design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Momento is built local-first. There is no account, no backend, no tracking and no cloud upload. Your moments stay on your device.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mt-4">
              Photos are only accessed when you choose them, and exports happen only when you decide to save them to Apple Photos.
            </p>
          </div>

          {/* Badges */}
          <div ref={badgesRef}>
            <div className="grid grid-cols-1 gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(160,193,185,0.15)' }}
                  >
                    <Icon size={18} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="text-[15px] font-medium text-gray-200">{label}</span>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
