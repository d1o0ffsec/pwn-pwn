import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}

/** Encabezado de sección reutilizable para mantener consistencia visual. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow mono">
        <span className="section-heading__line" />
        {eyebrow}
      </span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
