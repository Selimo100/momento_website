import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../contexts/theme'
import momentoIcon from '../assets/momento_icon.png'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  /* On the home page the nav floats directly on the dark hero until scroll. */
  const onDark = isHome && !scrolled && !menuOpen

  const navLinks = [
    {
      label: 'Features',
      glyph: '+',
      action: () => {
        if (isHome) scrollTo('features')
        else {
          window.location.hash = '/'
          setTimeout(() => scrollTo('features'), 100)
        }
      },
    },
    {
      label: 'Use Cases',
      glyph: '+',
      action: () => {
        if (isHome) scrollTo('use-cases')
        else {
          window.location.hash = '/'
          setTimeout(() => scrollTo('use-cases'), 100)
        }
      },
    },
    { label: 'Privacy', glyph: '•', to: '/privacy' },
    { label: 'Support', glyph: '•', to: '/support' },
  ]

  const pillClass = `pill cursor-pointer ${onDark ? 'pill-on-dark' : ''}`

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: onDark ? 'transparent' : 'var(--s-canvas)',
        borderBottom: onDark ? '1px solid transparent' : '1px solid var(--s-line)',
        backdropFilter: onDark ? 'none' : 'blur(5px)',
        WebkitBackdropFilter: onDark ? 'none' : 'blur(5px)',
        transition:
          'background-color 0.5s cubic-bezier(0.19, 1, 0.22, 1), border-color 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      <nav
        className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Momento home">
          <img src={momentoIcon} alt="" className="w-6 h-6" />
          <span
            className="mono text-caption"
            style={{ color: onDark ? '#ffffff' : 'var(--s-ink)' }}
          >
            Momento
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className={pillClass}>
                <span className="text-micro opacity-60">{link.glyph}</span>
                {link.label}
              </Link>
            ) : (
              <button key={link.label} onClick={link.action} className={pillClass}>
                <span className="text-micro opacity-60">{link.glyph}</span>
                {link.label}
              </button>
            )
          )}

          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`${pillClass} w-[34px] h-[30px] justify-center !px-0`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="flex"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <span className={`pill ${onDark ? 'pill-on-dark' : ''} pointer-events-none`}>
            <motion.span
              className="accent-dot"
              style={{ width: 6, height: 6 }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Soon on iOS
          </span>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-1.5">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`${pillClass} w-[34px] h-[30px] justify-center !px-0`}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            className={`${pillClass} w-[34px] h-[30px] justify-center !px-0`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden overflow-hidden bg-canvas"
            style={{ borderTop: '1px solid var(--s-line)' }}
          >
            <div className="px-6 py-12 flex flex-col items-start gap-6">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="pill"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-micro opacity-60">{link.glyph}</span>
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => {
                      link.action?.()
                      setMenuOpen(false)
                    }}
                    className="pill cursor-pointer"
                  >
                    <span className="text-micro opacity-60">{link.glyph}</span>
                    {link.label}
                  </button>
                )
              )}
              <span className="mono text-micro text-ink-3 flex items-center gap-1.5">
                <span className="accent-dot" style={{ width: 6, height: 6 }} />
                Soon on iOS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
