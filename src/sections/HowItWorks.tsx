import { PlusSquare, Images, MessageSquare, Share2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    icon: PlusSquare,
    number: '01',
    title: 'Create a Moment',
    description: 'Give it a title, date and description.',
  },
  {
    icon: Images,
    number: '02',
    title: 'Add your photos',
    description: 'Select pictures from Apple Photos.',
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Tell the story',
    description: 'Add mood, people, location and notes.',
  },
  {
    icon: Share2,
    number: '04',
    title: 'Export or revisit',
    description: 'Export to Apple Photos or rediscover it later.',
  },
]

export default function HowItWorks() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headerRef} className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Four steps to a memory
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          {steps.map(({ icon: Icon, number, title, description }, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useScrollReveal<HTMLDivElement>((i + 1) as 1 | 2 | 3 | 4)
            return (
              <div
                key={title}
                ref={ref}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-surface-accent flex items-center justify-center shadow-sm border border-primary/10">
                    <Icon size={22} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center"
                  >
                    <span className="text-white text-[9px] font-bold">{number}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[160px]">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
