import { ArrowDownRight, ShieldCheck, Mail } from 'lucide-react'
import Mascot from './Mascot'
import { site } from '../data/site'
import './Hero.css'

const chips = ['Pentesting', 'OSINT', 'DevSecOps']

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge mono">
            <span className="hero__badge-dot" />
            Offensive Security · OSINT · DevSecOps
          </div>

          <h1 className="hero__title">
            <span className="hero__title-main">pwn<span>&</span>pwn</span>
            <span className="hero__title-sub">Seguridad que piensa como el atacante.</span>
          </h1>

          <p className="hero__lead">
            Soluciones integrales de <strong>pentesting</strong>, <strong>ciberseguridad</strong> y{' '}
            <strong>DevSecOps</strong> para descubrir tus vulnerabilidades antes de que alguien más lo haga.
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#cotizacion">
              Solicitar cotización <ArrowDownRight size={18} />
            </a>
            <a className="btn btn-ghost" href="#servicios">
              Ver servicios
            </a>
          </div>

          <ul className="hero__chips" aria-label="Áreas de especialidad">
            {chips.map((chip) => (
              <li key={chip} className="mono">
                <ShieldCheck size={14} /> {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__orbit hero__orbit--outer" />
          <div className="hero__orbit hero__orbit--inner" />
          <Mascot className="hero__mascot" />

          <span className="hero__float hero__float--one mono">OSINT</span>
          <span className="hero__float hero__float--two mono">PENTEST</span>
          <span className="hero__float hero__float--three mono">DEVSECOPS</span>

          <a className="hero__dm mono" href={`mailto:${site.email}`}>
            <Mail size={14} /> {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
