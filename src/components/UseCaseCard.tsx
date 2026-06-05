import { useScrollReveal } from '../hooks/useScrollReveal'

interface UseCaseCardProps {
  title: string
  description: string
  gradient: string
  delay?: number
}

export default function UseCaseCard({ title, description, gradient, delay = 0 }: UseCaseCardProps) {
  const ref = useScrollReveal<HTMLDivElement>(delay)

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Gradient bar */}
      <div className={`h-1.5 w-full ${gradient}`} />
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5 tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
