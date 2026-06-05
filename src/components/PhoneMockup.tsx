export default function PhoneMockup() {
  const miniPhotos = [
    'from-teal-300 to-primary-dark',
    'from-rose-200 to-rose-400',
    'from-amber-200 to-amber-300',
    'from-sky-200 to-sky-400',
    'from-violet-200 to-violet-300',
    'from-primary-light to-primary',
  ]

  return (
    <div
      className="relative select-none"
      style={{ width: 260, height: 534 }}
      role="img"
      aria-label="Momento app screenshot showing Summer Night memory"
    >
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 -z-10 rounded-[44px] blur-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, #a0c1b9 0%, transparent 70%)' }}
      />

      {/* Phone outer frame */}
      <div
        className="absolute inset-0 rounded-[44px] shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2d2d2d, #111111)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06) inset',
        }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[88px] w-[3px] h-8 bg-gray-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-[132px] w-[3px] h-12 bg-gray-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-[192px] w-[3px] h-12 bg-gray-600 rounded-l-sm" />
        <div className="absolute -right-[3px] top-[110px] w-[3px] h-16 bg-gray-600 rounded-r-sm" />

        {/* Screen bezel inset */}
        <div
          className="absolute rounded-[40px] overflow-hidden"
          style={{ inset: '3px', background: '#0a0a0a' }}
        >
          {/* Dynamic Island */}
          <div className="flex justify-center pt-[10px]">
            <div
              className="h-[26px] rounded-full bg-black"
              style={{ width: 110 }}
            />
          </div>

          {/* App content */}
          <div className="absolute inset-0 overflow-hidden" style={{ top: 0 }}>
            {/* Cover photo area */}
            <div
              className="relative"
              style={{
                height: 220,
                background: 'linear-gradient(160deg, #a0c1b9 0%, #6b9e94 40%, #3d5a52 100%)',
              }}
            >
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)',
                }}
              />
              {/* Status bar spacer */}
              <div className="h-10" />
              {/* Back button */}
              <div className="px-4 flex items-center gap-1.5 mt-1">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 border-l-[1.5px] border-b-[1.5px] border-white rotate-45 translate-x-[1px]" />
                </div>
                <span className="text-white/70 text-[10px]">Memories</span>
              </div>
              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}>
                <div className="text-white/60 text-[10px] font-medium mb-0.5 tracking-wider uppercase">Jun 2024</div>
                <div className="text-white font-semibold text-[18px] tracking-tight leading-tight">Summer Night</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white/80 rounded-full" />
                  </div>
                  <span className="text-white/60 text-[9px]">Lake Zurich</span>
                </div>
              </div>
            </div>

            {/* Content below cover */}
            <div className="bg-white" style={{ minHeight: 400 }}>
              {/* Story card */}
              <div className="mx-3 -mt-4 relative z-10">
                <div
                  className="rounded-2xl p-3.5"
                  style={{
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-semibold text-primary uppercase tracking-widest">Story</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#fbbf24' }} />
                      <span className="text-[8px] text-gray-400">Joyful</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed line-clamp-2">
                    A perfect evening watching the sunset from the rooftop bar. The lake was golden.
                  </p>
                  <div className="flex gap-1 mt-2">
                    {['Anna', 'Jonas'].map((p) => (
                      <span
                        key={p}
                        className="text-[8px] text-primary font-medium px-2 py-0.5 rounded-full"
                        style={{ background: '#eef6f4' }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section label */}
              <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-800">Photos</span>
                <span className="text-[9px] text-primary">12 shots</span>
              </div>

              {/* Photo grid */}
              <div className="px-3 grid grid-cols-3 gap-1">
                {miniPhotos.map((gradient, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${gradient} rounded-xl relative overflow-hidden`}
                    style={{ aspectRatio: '1' }}
                  >
                    {i === 0 && (
                      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 text-white">★</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom tab bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-around px-4 border-t"
                style={{ borderColor: '#f0f0f0', background: 'rgba(255,255,255,0.95)' }}
              >
                {['grid', 'heart', 'clock', 'settings'].map((tab, i) => (
                  <div
                    key={tab}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-surface-accent' : ''}`}
                  >
                    <div
                      className="w-4 h-4 rounded-sm"
                      style={{ background: i === 0 ? '#a0c1b9' : '#d1d5db' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="w-28 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
