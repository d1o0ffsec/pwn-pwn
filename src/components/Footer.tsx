import { site } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark mono">&lt;/&gt;</span>
          <span className="footer__name">
            pwn<span>&</span>pwn
          </span>
        </div>

        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy mono">
          © {new Date().getFullYear()} pwn&pwn · {site.location}
        </p>
      </div>
    </footer>
  )
}
