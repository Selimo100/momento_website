import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

interface FitTextProps {
  children: string
  className?: string
  /** Never grow past this, however wide the viewport gets */
  maxFontSize?: number
  /** Also cap the size at this fraction of viewport height, so a monument
      headline stays monumental without pushing everything else off screen */
  maxHeightRatio?: number
  style?: React.CSSProperties
  as?: 'h1' | 'h2' | 'span'
  id?: string
  /** 'viewport' measures against the screen rather than the parent box — use it
      for full-bleed monument type, where flex ancestors would otherwise shrink
      the measuring container and report far too little room */
  fitTo?: 'container' | 'viewport'
  /** Breathing room left at each edge in `viewport` mode */
  inset?: number
  /** Shrink slightly below the exact fit. A measured fit is edge-to-edge, and
      glyph side bearings plus trailing negative tracking can still graze the
      boundary — this keeps an even margin on both sides. */
  fitFactor?: number
}

/** Probe size used for measuring; the result is scaled from this. */
const PROBE = 100

/**
 * Sets font-size so the text fills its container's width exactly and never
 * clips — measured, not guessed with `vw`, so the word stays whole no matter
 * which font actually loads (Manrope, a fallback, or nothing yet).
 */
export default function FitText({
  children,
  className,
  maxFontSize = 288,
  maxHeightRatio,
  style,
  as: Tag = 'span',
  id,
  fitTo = 'container',
  inset = 12,
  fitFactor = 1,
}: FitTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLElement>(null)
  const [fontSize, setFontSize] = useState<number | null>(null)

  const measure = useCallback(() => {
    const wrap = wrapRef.current
    const text = textRef.current
    if (!wrap || !text) return

    // clientWidth of documentElement excludes the scrollbar; innerWidth does not
    const available =
      fitTo === 'viewport'
        ? document.documentElement.clientWidth - inset * 2
        : wrap.clientWidth
    if (!available) return

    // Measure at a known size, then scale the result to fit.
    // The element is inline-block on purpose: a block element's scrollWidth is
    // clamped to its own width, so it would report the container's width and
    // yield a ratio of 1 (leaving the type stuck at the probe size).
    // offsetWidth, not getBoundingClientRect, so an ancestor transform cannot
    // distort the reading.
    text.style.fontSize = `${PROBE}px`
    const natural = text.offsetWidth
    if (!natural) return

    const byWidth = (available / natural) * PROBE * fitFactor
    const byHeight = maxHeightRatio ? window.innerHeight * maxHeightRatio : Infinity
    const next = Math.min(byWidth, byHeight, maxFontSize)
    // Restore imperatively too: if `next` matches state React skips the
    // re-render and the element would stay stuck at the probe size.
    text.style.fontSize = `${next}px`
    setFontSize(next)
  }, [maxFontSize, maxHeightRatio, fitTo, inset, fitFactor])

  useLayoutEffect(() => {
    measure()
  }, [measure, children])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const observer = new ResizeObserver(measure)
    observer.observe(wrap)
    window.addEventListener('resize', measure)

    // Re-fit once the display face actually arrives — metrics change with it.
    document.fonts?.ready.then(measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  // `min-w-0` keeps the nowrap block from inflating a flex ancestor while it is
  // measured at probe size. Deliberately no `overflow-hidden` — that would clip
  // the glyph tops at this line-height.
  return (
    <div ref={wrapRef} className="w-full min-w-0 text-center">
      <Tag
        id={id}
        ref={textRef as React.Ref<HTMLHeadingElement>}
        className={className}
        style={{
          ...style,
          display: 'inline-block',
          whiteSpace: 'nowrap',
          // `background-clip: text` paints only inside the background box, so a
          // glyph overshooting its advance width (the round `o`, the `M` apex)
          // loses its fill and reads as clipped. This em-based padding widens
          // the paint box with the type; offsetWidth includes it, so the fit
          // maths stay exact.
          paddingInline: '0.08em',
          fontSize: fontSize ? `${fontSize}px` : `${PROBE}px`,
          // Avoid a flash of mis-sized type on the first paint.
          visibility: fontSize === null ? 'hidden' : undefined,
        }}
      >
        {children}
      </Tag>
    </div>
  )
}
