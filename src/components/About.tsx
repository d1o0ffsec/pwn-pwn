import { Check, LockKeyhole, Radar, FileText } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Mascot from './Mascot'
import { site } from '../data/site'
import './About.css'

const principles = [
  {
    icon: Radar,
    title: 'Enfoque proactivo',
    text: 'Anticipamos amenazas con una mentalidad ofensiva antes de que se conviertan en incidentes.',
  },
  {
    icon: LockKeyhole,
    title: 'Confidencialidad total',
    text: 'Cada hallazgo se maneja con discreción y responsabilidad, de principio a fin.',
  },
  {
    icon: FileText,
    title: 'Hallazgos accionables',
    text: 'Reportes claros, priorizados y con recomendaciones que tu equipo puede aplicar.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container">
        <SectionHeading
          eyebrow="// Quiénes somos"
          title={
            <>
              Sobre <span className="accent">pwn&pwn</span>
            </>
          }
        />

        <div className="about__grid">
          <div className="about__copy">
            <p className="about__lead">
              Somos un equipo enfocado en la <strong>seguridad ofensiva</strong>, la{' '}
              <strong>investigación digital</strong> y la defensa real de la infraestructura tecnológica de
              nuestros clientes.
            </p>
            <p className="about__text">
              Combinamos pentesting, inteligencia de fuentes abiertas y prácticas DevSecOps para ofrecer una
              visión completa de tu riesgo. No se trata solo de encontrar vulnerabilidades: se trata de
              entender tu contexto, priorizar lo que importa y ayudarte a fortalecer tu postura de seguridad
              de forma sostenible.
            </p>

            <ul className="about__principles">
              {principles.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="about__principle-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a className="about__link mono" href={`mailto:${site.email}`}>
              <Check size={15} /> Conversemos sobre tu proyecto <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="about__panel">
            <div className="about__panel-glow" />
            <Mascot className="about__mascot" />
            <div className="about__panel-caption mono">
              <span className="about__panel-dot" />
              Defendiendo lo que importa
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
