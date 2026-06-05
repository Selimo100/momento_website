import { useEffect, useRef } from 'react'
import PhoneMockup from '../components/PhoneMockup'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [textRef.current, phoneRef.current].filter(Boolean) as HTMLElement[]
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`
    })
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(160,193,185,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(160,193,185,0.10) 0%, transparent 60%), #f8faf9',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text content */}
          <div ref={textRef} className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-accent border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide">Coming soon for iOS</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-5"
            >
              Turn your photos into
              <span
                className="block mt-1"
                style={{
                  background: 'linear-gradient(135deg, #a0c1b9 0%, #5a9289 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                memories worth keeping.
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Momento is a local-first iOS app for creating personal photo moments, adding stories, choosing best shots, and exporting beautiful albums directly to Apple Photos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('features')}
                className="px-7 py-3.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                Discover Momento
              </button>
              <button
                onClick={() => scrollTo('use-cases')}
                className="px-7 py-3.5 rounded-full bg-white text-gray-900 text-sm font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                View Features
              </button>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <p className="text-xs text-gray-400">No account · No backend · No tracking</p>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            ref={phoneRef}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating accent cards */}
              <div
                className="absolute -left-12 top-16 glass rounded-2xl px-3.5 py-2.5 shadow-lg hidden lg:block"
                style={{ zIndex: 10 }}
              >
                <p className="text-[10px] text-gray-400 mb-0.5">Completion</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: '72%' }} />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-800">72%</span>
                </div>
              </div>

              <div
                className="absolute -right-10 bottom-32 glass rounded-2xl px-3.5 py-2.5 shadow-lg hidden lg:block"
                style={{ zIndex: 10 }}
              >
                <p className="text-[10px] font-semibold text-gray-700">Best Shot</p>
                <p className="text-[9px] text-primary mt-0.5">3 favorites</p>
              </div>

              <div
                className="absolute -left-8 bottom-20 glass rounded-2xl px-3 py-2 shadow-md hidden lg:block"
                style={{ zIndex: 10 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-lg bg-surface-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-700">Private</span>
                </div>
              </div>

              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-5 h-8 rounded-full border border-gray-400 flex items-start justify-center p-1">
          <div
            className="w-1 h-2 rounded-full bg-gray-500"
            style={{ animation: 'bounce 2s infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
