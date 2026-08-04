import { ShieldCheck, Server, BarChart2, Megaphone, HardDrive, Image, MousePointer } from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const commitments = [
  {
    icon: ShieldCheck,
    title: 'No account required',
    description:
      'Momento works entirely without registration. There is no login, no profile, no identity stored anywhere.',
  },
  {
    icon: Server,
    title: 'No backend',
    description:
      'There is no server, no API, and no cloud infrastructure involved in using Momento.',
  },
  {
    icon: BarChart2,
    title: 'No analytics',
    description:
      'Momento does not track usage, collect crash reports, or send any data to third parties.',
  },
  {
    icon: Megaphone,
    title: 'No ads',
    description:
      'The app contains no advertising and no monetisation that involves your data.',
  },
  {
    icon: HardDrive,
    title: 'Data stays on your device',
    description:
      'All moments, photos, stories and notes are stored locally on your iPhone. Nothing leaves your device unless you explicitly choose to export.',
  },
  {
    icon: Image,
    title: 'Photo access only with permission',
    description:
      'Momento only accesses Apple Photos when you actively choose to add photos to a moment. The app does not scan or index your library in the background.',
  },
  {
    icon: MousePointer,
    title: 'Export only on your action',
    description:
      'An Apple Photos album is only created when you explicitly choose to export a moment. No automatic syncing or uploading happens.',
  },
]

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const } },
}

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="pt-[120px] pb-24 min-h-screen bg-canvas">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">
              <span className="accent-dot" style={{ width: 6, height: 6 }} />
              Privacy policy
            </span>
            <span className="rule flex-1" />
            <span className="mono text-micro text-ink-3">Updated 2026</span>
          </div>

          <h1
            className="display display-fade max-w-[16ch]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
          >
            Your privacy is the default
          </h1>
          <p className="mt-12 text-body-sm md:text-body text-ink-2 max-w-[56ch]">
            Momento was built with privacy as the foundation, not an afterthought. Here is exactly
            what we do, and what we do not do.
          </p>
        </motion.div>

        {/* Commitments — hairline rows, not cards */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-24">
          {commitments.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="grid gap-3 md:grid-cols-[64px_1fr_1fr] py-6 items-start"
              style={{ borderTop: '1px solid var(--s-line)' }}
            >
              <div className="flex items-center gap-3">
                <span className="mono text-micro text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon size={16} className="text-ink-3" strokeWidth={1.75} />
              </div>
              <h2 className="text-body-sm text-ink max-w-[24ch]">{title}</h2>
              <p className="text-micro text-ink-2 leading-[1.5] max-w-[56ch]">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="panel p-6 flex flex-col gap-3"
        >
          <span className="tag-ghost self-start" style={{ background: 'transparent', borderColor: 'var(--s-line)', color: 'var(--s-ink-3)' }}>
            Questions
          </span>
          <p className="text-body-sm text-ink-2 max-w-[56ch]">
            If you have any questions about privacy, please contact us at{' '}
            <a href="mailto:selimo.contact@gmail.com" className="ghost-link">
              selimo.contact@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
