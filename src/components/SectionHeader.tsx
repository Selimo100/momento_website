import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionHeaderProps {
  /** Mono metadata label — rendered uppercase as a solid tag */
  eyebrow?: string
  /** id for the <h2>, so the section's aria-labelledby resolves */
  id?: string
  title: string
  subtitle?: string
  /** Optional watermark word set behind the header in display type */
  ghost?: string
  /** Render for a permanently dark surface */
  light?: boolean
}

const entrance = [0.32, 0.72, 0, 1] as const

export default function SectionHeader({
  eyebrow,
  id,
  title,
  subtitle,
  ghost,
  light = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div className="relative mb-12 overflow-x-clip">
      {ghost && (
        <span
          aria-hidden
          className="display display-ghost absolute -top-6 left-0 select-none pointer-events-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(72px, 12vw, 160px)',
            color: light ? 'rgba(255,255,255,0.04)' : undefined,
          }}
        >
          {ghost}
        </span>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: entrance }}
        className="relative"
      >
        {eyebrow && (
          <span className={light ? 'tag-ghost' : 'tag'}>
            <span className="accent-dot" style={{ width: 6, height: 6 }} />
            {eyebrow}
          </span>
        )}
        <h2
          id={id}
          className={`display mt-4.5 max-w-[15ch] ${
            light ? 'display-fade-hero' : 'display-fade'
          }`}
          style={{ fontSize: 'clamp(48px, 8vw, 112px)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4.5 text-body-sm md:text-body max-w-[52ch] ${
              light ? 'text-ash' : 'text-ink-2'
            }`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  )
}
