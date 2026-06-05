import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhoneMockup from '../components/PhoneMockup'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const textVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: bgY, background: 'var(--hero-bg)' }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full -z-10 blur-3xl opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(circle, #a0c1b9 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full -z-10 blur-3xl opacity-10 dark:opacity-5"
        style={{ background: 'radial-gradient(circle, #7ca89e 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--hero-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            {/* Eyebrow badge */}
            <motion.div variants={textVariants} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-accent dark:bg-primary/10 border border-primary/20 mb-6">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="text-xs font-semibold text-primary tracking-wide">
                  Coming soon for iOS
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={textVariants}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-gray-900 dark:text-gray-50 leading-[1.1] tracking-tight mb-5"
            >
              Turn your photos into{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a0c1b9 0%, #5a9289 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                memories worth keeping.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={textVariants}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              Momento is a local-first iOS app for creating personal photo moments, adding stories, choosing best shots, and exporting beautiful albums directly to Apple Photos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo('features')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-7 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/10 dark:shadow-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 cursor-pointer"
              >
                Discover Momento
              </motion.button>
              <motion.button
                onClick={() => scrollTo('use-cases')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-7 py-3.5 rounded-full bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 text-sm font-semibold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 cursor-pointer"
              >
                View Features
              </motion.button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={textVariants}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-xs text-gray-400 dark:text-gray-500 text-center lg:text-left"
            >
              No account · No backend · No tracking · Local-first
            </motion.p>
          </motion.div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating accent cards — animated independently */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-14 top-16 glass rounded-2xl px-3.5 py-2.5 hidden lg:block z-10"
              >
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">Completion</p>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200">72%</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-12 bottom-36 glass rounded-2xl px-3.5 py-2.5 hidden lg:block z-10"
              >
                <p className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">Best Shot</p>
                <p className="text-[9px] text-primary mt-0.5">3 favorites</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-10 bottom-24 glass rounded-2xl px-3 py-2 hidden lg:block z-10"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-lg bg-surface-accent dark:bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">Private</span>
                </div>
              </motion.div>

              {/* Phone with parallax + float */}
              <motion.div
                style={{ y: phoneY }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 0.4, 0] }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <PhoneMockup />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-current"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
