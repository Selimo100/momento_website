import { Mail, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Does Momento upload my photos?',
    answer:
      'No. Momento is completely local-first. Photos are never uploaded to any server or cloud service. All data stays on your device.',
  },
  {
    question: 'Do I need an account?',
    answer:
      'No account is needed. Momento works entirely offline and without registration. There is no sign-in, no email required, and no profile.',
  },
  {
    question: 'Can Momento delete my Apple Photos?',
    answer:
      'No. Momento only reads photos from your library when you actively select them. It cannot and does not delete, move or modify any photo in Apple Photos.',
  },
  {
    question: 'How does Apple Photos export work?',
    answer:
      'When you choose to export a moment, Momento creates a new album in your Apple Photos library containing your selected photos. This happens only when you trigger the export manually — nothing is synced automatically.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 dark:border-white/[0.06] last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SupportPage() {
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
            <Mail size={13} className="text-primary" />
            <span className="text-xs font-semibold text-primary">Support</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-4">
            We are here to help
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Have a question about Momento? Get in touch or browse the answers below.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-6 border mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background:
              'linear-gradient(135deg, rgba(160,193,185,0.10) 0%, rgba(160,193,185,0.04) 100%)',
            borderColor: 'rgba(160,193,185,0.3)',
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail size={20} className="text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Send us an email
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              We read every message and try to reply within 1–2 business days.
            </p>
            <a
              href="mailto:selimo.contact@gmail.com"
              className="text-sm font-medium text-primary hover:underline"
            >
              selimo.contact@gmail.com
            </a>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-1 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
            Common questions about how Momento works.
          </p>

          <div className="bg-white dark:bg-[#141820] rounded-2xl border border-gray-100 dark:border-white/[0.06] px-6"
            style={{ boxShadow: 'var(--card-shadow)' }}>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
