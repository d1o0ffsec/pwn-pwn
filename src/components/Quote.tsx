import { Info, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { quoteItems, quoteDisclaimer } from '../data/quote'
import { site } from '../data/site'
import './Quote.css'

export default function Quote() {
  return (
    <section id="cotizacion" className="section quote">
      <div className="container">
        <SectionHeading
          eyebrow="// Inversión estimada"
          title={
            <>
              Cotización <span className="accent">aproximada</span>
            </>
          }
          subtitle="Todos los precios están en dólares (USD). Una referencia transparente para que sepas qué esperar: el valor final se define según tu alcance real."
          align="center"
        />

        <div className="quote__notice">
          <Info size={17} />
          <span>{quoteDisclaimer}</span>
        </div>

        <div className="quote__table-wrap">
          <table className="quote__table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Alcance orientativo</th>
                <th>Precio (USD)</th>
                <th>Plazo</th>
              </tr>
            </thead>
            <tbody>
              {quoteItems.map((item) => (
                <tr key={item.service}>
                  <td data-label="Servicio" className="quote__service">
                    {item.service}
                  </td>
                  <td data-label="Alcance">{item.scope}</td>
                  <td data-label="Precio (USD)" className="quote__price">
                    {item.price}
                  </td>
                  <td data-label="Plazo">{item.leadTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="quote__footer">
          <div>
            <h3>¿Necesitas algo a medida?</h3>
            <p>Cuéntanos tu caso y armamos una propuesta ajustada a tus objetivos.</p>
          </div>
          <a
            className="btn btn-primary"
            href={`mailto:${site.email}?subject=Solicitud%20de%20cotizaci%C3%B3n`}
          >
            Pedir cotización exacta <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
