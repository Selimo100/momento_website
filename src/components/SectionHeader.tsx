interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? 'text-primary-light' : 'text-primary'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
