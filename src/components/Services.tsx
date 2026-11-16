import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'
import './Services.css'

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="// Qué hacemos"
          title={
            <>
              Nuestros <span className="accent">servicios</span>
            </>
          }
          subtitle="Cobertura integral: desde la seguridad ofensiva hasta la integración de seguridad en tu ciclo de desarrollo."
        />

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
