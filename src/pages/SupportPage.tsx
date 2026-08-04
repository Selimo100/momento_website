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

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderTop: '1px solid var(--s-line)' }}>
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-6 cursor-pointer group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="mono text-micro text-ink-3">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-body-sm text-ink">{question}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="flex"
        >
          <ChevronDown size={16} className="text-ink-3 shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-9 text-micro text-ink-2 leading-[1.5] max-w-[64ch]">{answer}</p>
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
              Support
            </span>
            <span className="rule flex-1" />
            <span className="mono text-micro text-ink-3">Reply in 1–2 days</span>
          </div>

          <h1
            className="display display-fade max-w-[14ch]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
          >
            We are here to help
          </h1>
          <p className="mt-12 text-body-sm md:text-body text-ink-2 max-w-[56ch]">
            Have a question about Momento? Get in touch or browse the answers below.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="panel p-6 mb-24 grid gap-6 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div className="flex flex-col gap-1.5">
            <span className="mono text-micro text-ink-3 flex items-center gap-3">
              <Mail size={14} strokeWidth={1.75} />
              Send us an email
            </span>
            <p className="text-body-sm text-ink-2 max-w-[52ch]">
              We read every message and try to reply within 1–2 business days.
            </p>
          </div>
          <a href="mailto:selimo.contact@gmail.com" className="pill pill-solid justify-self-start">
            <span className="text-micro opacity-60">+</span>
            selimo.contact@gmail.com
          </a>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3 mb-12">
            <h2 className="display display-fade" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Frequently asked questions
            </h2>
            <span className="rule flex-1" />
            <span className="mono text-micro text-ink-3">{String(faqs.length).padStart(2, '0')}</span>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
