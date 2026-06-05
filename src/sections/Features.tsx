import {
  BookOpen,
  Star,
  CheckCircle,
  Lock,
  Shuffle,
  ImageDown,
  ShieldCheck,
  LayoutGrid,
} from 'lucide-react'
import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    icon: BookOpen,
    title: 'Moment Stories',
    description:
      'Add a short story, mood, people, location and notes to make every memory feel personal.',
  },
  {
    icon: Star,
    title: 'Best Shots',
    description:
      'Mark your favorite photos and export only the pictures that really matter.',
  },
  {
    icon: CheckCircle,
    title: 'Moment Completion',
    description:
      'See how complete a moment is and get gentle hints to finish it.',
  },
  {
    icon: Lock,
    title: 'Time Capsule',
    description:
      'Seal a memory and reopen it later when the moment feels even more special.',
  },
  {
    icon: Shuffle,
    title: 'Surprise Me',
    description: 'Rediscover random old moments with one tap.',
  },
  {
    icon: ImageDown,
    title: 'Apple Photos Export',
    description:
      'Create a real Apple Photos album from your selected moment, without using a backend.',
  },
  {
    icon: ShieldCheck,
    title: 'Private Moments',
    description:
      'Protect personal memories with Face ID or device passcode.',
  },
  {
    icon: LayoutGrid,
    title: 'Layouts',
    description:
      'Choose between Story, Timeline, Collage, Photo Dump, Favorites Only and Before / After layouts.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-white dark:bg-[#0b0e16]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Everything a memory deserves"
          subtitle="Each feature in Momento is built around one idea: make your memories feel intentional, complete and worth revisiting."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
