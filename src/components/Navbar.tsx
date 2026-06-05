import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../contexts/ThemeContext'

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
      <span className="font-semibold text-gray-900 dark:text-white text-[15px] tracking-tight">
        Momento
      </span>
    </Link>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navLinks = [
    {
      label: 'Features',
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
      action: () => {
        if (isHome) scrollTo('use-cases')
        else {
          window.location.hash = '/'
          setTimeout(() => scrollTo('use-cases'), 100)
        }
      },
    },
    { label: 'Privacy', to: '/privacy' },
    { label: 'Support', to: '/support' },
  ]

  return (
    <motion.header
      initial={false}
      animate={
        scrolled || menuOpen
          ? { backgroundColor: isDark ? 'rgba(11,14,22,0.92)' : 'rgba(255,255,255,0.92)' }
          : { backgroundColor: 'rgba(0,0,0,0)' }
      }
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen
          ? isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)'
          : 'none',
      }}
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
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            )
          )}

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                transition={{ duration: 0.18 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <div className="ml-4 pl-4 border-l border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-surface-accent dark:bg-primary/10 rounded-full border border-primary/20 dark:border-primary/20">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Coming soon for iOS
            </div>
          </div>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-gray-100 dark:border-white/07"
            style={{
              background: isDark ? 'rgba(11,14,22,0.97)' : 'rgba(255,255,255,0.97)',
            }}
          >
            <div className="px-5 pb-5 pt-1 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => {
                      link.action?.()
                      setMenuOpen(false)
                    }}
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-left rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/05">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-surface-accent dark:bg-primary/10 rounded-full border border-primary/20">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Coming soon for iOS
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
