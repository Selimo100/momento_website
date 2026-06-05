import UseCaseCard from '../components/UseCaseCard'
import SectionHeader from '../components/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cases = [
  {
    title: 'Trips and holidays',
    description: 'Capture every detail of your travels — the locations, the people, the mood.',
    gradient: 'bg-gradient-to-r from-sky-300 to-blue-400',
  },
  {
    title: 'Birthdays',
    description: 'Build a lasting memory of a special day with photos, notes and favorite moments.',
    gradient: 'bg-gradient-to-r from-rose-300 to-pink-400',
  },
  {
    title: 'Nights out',
    description: 'Collect the best shots from a great evening and preserve the story behind it.',
    gradient: 'bg-gradient-to-r from-violet-400 to-purple-500',
  },
  {
    title: 'Friends and family',
    description: 'Create memories around the people who matter most, tagged and organised.',
    gradient: 'bg-gradient-to-r from-amber-300 to-orange-400',
  },
  {
    title: 'Pets',
    description: 'Document your pet\'s life in curated moments — milestones, moods and personality.',
    gradient: 'bg-gradient-to-r from-lime-300 to-green-400',
  },
  {
    title: 'Before / after projects',
    description: 'Show the transformation. Before, during, after — all in one focused moment.',
    gradient: 'bg-gradient-to-r from-primary-light to-primary',
  },
  {
    title: 'Random beautiful days',
    description: 'Those ordinary days that turn out to be extraordinary. Keep them.',
    gradient: 'bg-gradient-to-r from-yellow-300 to-amber-400',
  },
  {
    title: 'Private memories',
    description: 'Personal moments you want to keep safe — protected by Face ID.',
    gradient: 'bg-gradient-to-r from-gray-400 to-gray-600',
  },
]

export default function UseCases() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="use-cases"
      className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #eef6f4 0%, #f8faf9 100%)' }}
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Use cases"
            title="Made for real memories"
            subtitle="Whatever moment matters to you, Momento gives it the space it deserves."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((c, i) => (
            <UseCaseCard
              key={c.title}
              title={c.title}
              description={c.description}
              gradient={c.gradient}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
