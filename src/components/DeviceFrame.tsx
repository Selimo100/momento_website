interface DeviceFrameProps {
  src: string
  alt: string
  /** Screen width in px — the frame sizes itself around it */
  width?: number
  device?: 'phone' | 'tablet'
  /** 'dark' for the permanently dark sections, 'theme' for ones that flip */
  surface?: 'dark' | 'theme'
}

/**
 * Thin-bezel device frame. The frame IS the container: no shadow, no glow,
 * no caption chrome — the only color on the page comes from the screen itself.
 */
export default function DeviceFrame({
  src,
  alt,
  width = 260,
  device = 'phone',
  surface = 'dark',
}: DeviceFrameProps) {
  const radius = device === 'phone' ? 44 : 28
  const bezel = device === 'phone' ? 3 : 6
  const screenRadius = radius - bezel

  return (
    <div
      className="relative select-none"
      style={{
        width: width + bezel * 2,
        maxWidth: '100%',
        padding: bezel,
        borderRadius: radius,
        background: '#000000',
        overflow: 'hidden',
        border:
          surface === 'dark' ? '1px solid rgba(255,255,255,0.18)' : '1px solid var(--s-line)',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block w-full h-auto"
        style={{ borderRadius: screenRadius }}
      />
    </div>
  )
}
