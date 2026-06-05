import { type LucideIcon } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const ref = useScrollReveal<HTMLDivElement>(delay)

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-surface-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon size={20} className="text-primary" strokeWidth={1.75} />
      </div>
      <h3 className="font-semibold text-gray-900 text-[15px] mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
