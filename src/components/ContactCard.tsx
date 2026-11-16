import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import './ContactCard.css'

interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
  external?: boolean
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <a
      className="contact-card"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="contact-card__icon">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <span className="contact-card__body">
        <span className="contact-card__label mono">{label}</span>
        <span className="contact-card__value">{value}</span>
      </span>
      <ArrowUpRight className="contact-card__arrow" size={18} />
    </a>
  )
}
