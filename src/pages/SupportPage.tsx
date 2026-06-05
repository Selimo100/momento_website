import { Mail, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

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
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-gray-800">{question}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function SupportPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="pt-28 pb-24 min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-accent border border-primary/20 mb-5">
            <Mail size={13} className="text-primary" />
            <span className="text-xs font-semibold text-primary">Support</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            We are here to help
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Have a question about Momento? Get in touch or browse the answers below.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl p-6 border mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(160,193,185,0.10) 0%, rgba(160,193,185,0.04) 100%)',
            borderColor: 'rgba(160,193,185,0.3)',
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail size={20} className="text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-gray-800 mb-1">Send us an email</p>
            <p className="text-sm text-gray-500 mb-2">
              We read every message and try to reply within 1–2 business days.
            </p>
            <a
              href="mailto:selina@mogicato.ch"
              className="text-sm font-medium text-primary hover:underline"
            >
              selina@mogicato.ch
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm text-gray-400 mb-6">Common questions about how Momento works.</p>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
