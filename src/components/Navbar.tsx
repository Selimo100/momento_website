import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group"
      aria-label="Momento home"
    >
      <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
        <span className="text-white font-bold text-base leading-none select-none">M</span>
      </div>
      <span className="font-semibold text-gray-900 text-[15px] tracking-tight">Momento</span>
    </Link>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navLinks = [
    { label: 'Features', action: () => { if (isHome) scrollTo('features'); else window.location.href = '/#features' } },
    { label: 'Use Cases', action: () => { if (isHome) scrollTo('use-cases'); else window.location.href = '/#use-cases' } },
    { label: 'Privacy', to: '/privacy' },
    { label: 'Support', to: '/support' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            )
          )}
          <div className="ml-4 pl-4 border-l border-gray-200">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-surface-accent rounded-full border border-primary/20">
              Coming soon for iOS
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-5 pb-5 pt-1">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="px-4 py-3 text-sm text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => { link.action?.(); setMenuOpen(false) }}
                  className="px-4 py-3 text-sm text-gray-700 text-left rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-surface-accent rounded-full border border-primary/20">
                Coming soon for iOS
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
