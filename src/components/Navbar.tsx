import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="navbar__brand-mark mono">&lt;/&gt;</span>
          <span className="navbar__brand-text">
            pwn<span>&</span>pwn
          </span>
        </a>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`} aria-label="Navegación principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary navbar__cta navbar__cta--mobile"
            href={`mailto:${site.email}?subject=Solicitud%20de%20cotizaci%C3%B3n`}
            onClick={() => setOpen(false)}
          >
            Hablemos <ArrowUpRight size={16} />
          </a>
        </nav>

        <a
          className="btn btn-primary navbar__cta"
          href={`mailto:${site.email}?subject=Solicitud%20de%20cotizaci%C3%B3n`}
        >
          Hablemos <ArrowUpRight size={16} />
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
