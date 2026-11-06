import UseCaseCard from '../components/UseCaseCard'
import SectionHeader from '../components/SectionHeader'

const cases = [
  {
    title: 'Trips and holidays',
    description: 'Capture every detail of your travels — the locations, the people, the mood.',
    label: 'Travel',
  },
  {
    title: 'Birthdays',
    description: 'Build a lasting memory of a special day with photos, notes and favorite moments.',
    label: 'Celebration',
  },
  {
    title: 'Nights out',
    description: 'Collect the best shots from a great evening and preserve the story behind it.',
    label: 'Evening',
  },
  {
    title: 'Friends and family',
    description: 'Create memories around the people who matter most, tagged and organised.',
    label: 'People',
  },
  {
    title: 'Pets',
    description: "Document your pet's life in curated moments — milestones, moods and personality.",
    label: 'Companions',
  },
  {
    title: 'Before / after projects',
    description: 'Show the transformation. Before, during, after — all in one focused moment.',
    label: 'Progress',
  },
  {
    title: 'Random beautiful days',
    description: 'Those ordinary days that turn out to be extraordinary. Keep them.',
    label: 'Everyday',
  },
  {
    title: 'Private memories',
    description: 'Personal moments you want to keep safe — protected by Face ID.',
    label: 'Protected',
  },
]

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-20 md:py-30 bg-wash"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Use cases"
          id="use-cases-heading"
          ghost="Moments"
          title="Made for real memories"
          subtitle="Whatever moment matters to you, Momento gives it the space it deserves."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cases.map((c, i) => (
            <UseCaseCard
              key={c.title}
              title={c.title}
              description={c.description}
              label={c.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
