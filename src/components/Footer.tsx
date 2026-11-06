import { Link } from 'react-router-dom'
import momentoIcon from '../assets/momento_icon.png'
import FitText from './FitText'
import AppStoreBadge from './AppStoreBadge'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navItems = [
  { label: 'Features', id: 'features' },
  { label: 'Use Cases', id: 'use-cases' },
  { label: 'How it Works', id: 'how-it-works' },
  { label: 'Download', id: 'download' },
]

const legalItems = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Support', to: '/support' },
]

const linkClass =
  'text-body-sm text-left text-white/60 transition-colors duration-300 hover:text-pure-white'

export default function Footer() {
  return (
    <footer className="relative bg-onyx overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-6">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-x-6 gap-y-12 lg:gap-12 mb-16 md:mb-24">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={momentoIcon} alt="" className="w-6 h-6" />
              <span className="mono text-caption text-pure-white">Momento</span>
            </div>
            <p className="text-body-sm max-w-[34ch]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              A local-first iOS memory app. Turn your photos into memories worth keeping.
            </p>
            <AppStoreBadge tone="light" className="mt-6" />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mono text-micro mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`${linkClass} cursor-pointer`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & contact */}
          <div>
            <p className="mono text-micro mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Legal &amp; Support
            </p>
            <ul className="flex flex-col gap-3">
              {legalItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:selimo.contact@gmail.com"
                  className={linkClass}
                >
                  selimo.contact<wbr />@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Monument wordmark */}
        <div aria-hidden>
          <FitText
            className="display display-fade-hero text-center select-none"
            maxFontSize={420}
            maxHeightRatio={0.34}
          >
            Momento
          </FitText>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-6 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          <p className="mono text-micro" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Momento
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Link to="/privacy" className="pill pill-on-dark">
              Privacy
            </Link>
            <Link to="/support" className="pill pill-on-dark">
              Support
            </Link>
            <a href="mailto:selimo.contact@gmail.com" className="pill pill-on-dark">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
