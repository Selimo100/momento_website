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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="pt-28 pb-24 min-h-screen bg-surface dark:bg-[#0b0e16]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-accent dark:bg-primary/10 border border-primary/20 mb-5">
            <ShieldCheck size={13} className="text-primary" />
            <span className="text-xs font-semibold text-primary">Privacy policy</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-4">
            Your privacy is the default
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Momento was built with privacy as the foundation, not an afterthought. Here is exactly what we do, and what we do not do.
          </p>
        </motion.div>

        {/* Commitments */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 mb-14"
        >
          {commitments.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-white dark:bg-[#141820] rounded-2xl p-6 border border-gray-100 dark:border-white/[0.06] flex gap-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-accent dark:bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-2xl p-6 border text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(160,193,185,0.08) 0%, rgba(160,193,185,0.04) 100%)',
            borderColor: 'rgba(160,193,185,0.3)',
          }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
            If you have any questions about privacy, please contact us at{' '}
            <a
              href="mailto:selimo.contact@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              selimo.contact@gmail.com
            </a>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">Last updated: 2026</p>
        </motion.div>
      </div>
    </main>
  )
}
