import { Mail, Phone, Linkedin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ContactCard from './ContactCard'
import { site } from '../data/site'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="// Hablemos"
          title={
            <>
              ¿Listo para evaluar tu <span className="accent">seguridad</span>?
            </>
          }
          subtitle="Cuéntanos qué necesitas o solicita una evaluación sin compromiso. Respondemos a la brevedad."
          align="center"
        />

        <div className="contact__grid">
          <ContactCard icon={Mail} label="Correo" value={site.email} href={`mailto:${site.email}`} />
          <ContactCard icon={Phone} label="Teléfono / WhatsApp" value={site.phoneDisplay} href={site.phoneHref} />
          <ContactCard icon={Linkedin} label="LinkedIn" value="diego-chávez-offsec" href={site.linkedin} external />
        </div>

        <div className="contact__cta">
          <a className="btn btn-primary" href={`mailto:${site.email}?subject=Solicitud%20de%20evaluaci%C3%B3n`}>
            <Mail size={17} /> Solicitar evaluación
          </a>
          <span className="contact__availability mono">
            <span className="contact__availability-dot" /> Disponible para nuevos proyectos
          </span>
        </div>
      </div>
    </section>
  )
}
