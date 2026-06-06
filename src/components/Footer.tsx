import { Link } from 'react-router-dom'
import momentoIcon from '../assets/momento_icon.png'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={momentoIcon} alt="Momento" className="w-8 h-8 rounded-xl" />
              <span className="font-semibold text-white text-[15px]">Momento</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A local-first iOS memory app. Turn your photos into memories worth keeping.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    onClick={() => scrollTo('features')}
                    className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('use-cases')}
                    className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    Use Cases
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('how-it-works')}
                    className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    How it Works
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal & Contact */}
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">
              Legal & Support
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="mailto:selimo.contact@gmail.com"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  selimo.contact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© 2026 Momento. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/support"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Support
            </Link>
            <a
              href="mailto:selimo.contact@gmail.com"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
