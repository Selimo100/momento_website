import { APP_STORE_URL } from '../lib/appStore'

interface AppStoreBadgeProps {
  /** `light` = white badge for dark surfaces, `dark` = black badge for light surfaces, `theme` follows the site theme. */
  tone?: 'light' | 'dark' | 'theme'
  size?: 'md' | 'lg'
  className?: string
}

function AppleLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

const tones = {
  light: 'bg-pure-white text-onyx border-pure-white hover:bg-fog',
  dark: 'bg-onyx text-pure-white border-onyx hover:bg-graphite',
  theme: 'bg-ink text-canvas border-ink hover:opacity-85',
}

export default function AppStoreBadge({ tone = 'dark', size = 'md', className = '' }: AppStoreBadgeProps) {
  const lg = size === 'lg'
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Momento on the App Store"
      className={`inline-flex items-center border transition-all duration-300 hover:-translate-y-0.5 ${
        lg ? 'gap-3 pl-5 pr-7 py-3 rounded-[14px]' : 'gap-2.5 pl-4 pr-5 py-2 rounded-[11px]'
      } ${tones[tone]} ${className}`}
    >
      <AppleLogo size={lg ? 30 : 22} />
      <span className="flex flex-col items-start leading-none">
        <span className={lg ? 'text-[12px] mb-1' : 'text-[10px] mb-0.5'} style={{ fontWeight: 500 }}>
          Download on the
        </span>
        <span
          className={lg ? 'text-[26px]' : 'text-[19px]'}
          style={{ fontWeight: 600, letterSpacing: '-0.02em' }}
        >
          App Store
        </span>
      </span>
    </a>
  )
}
