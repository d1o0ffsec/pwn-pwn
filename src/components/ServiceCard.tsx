import { Crosshair, Network, Search, Shield, GitBranch, Compass } from 'lucide-react'
import type { Service } from '../data/services'
import './ServiceCard.css'

// Mapa de iconos: agrega aquí nuevos iconos si lo necesitas.
const iconMap = {
  crosshair: Crosshair,
  network: Network,
  search: Search,
  shield: Shield,
  git: GitBranch,
  compass: Compass,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]

  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon size={22} strokeWidth={1.8} />
        </span>
        <span className="service-card__category mono">{service.category}</span>
      </div>

      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>

      <ul className="service-card__tags">
        {service.tags.map((tag) => (
          <li key={tag} className="mono">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
