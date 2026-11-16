export const quoteDisclaimer =
  'Precios en dólares (USD). Valores de referencia: el costo final puede variar según el alcance y la complejidad real de cada proyecto. Solicita una cotización exacta sin compromiso.'

export interface QuoteItem {
  service: string
  scope: string
  price: string
  leadTime: string
}

export const quoteItems: QuoteItem[] = [
  {
    service: 'Consultoría básica',
    scope: '2 juntas de 2 horas · análisis',
    price: '$50',
    leadTime: 'A convenir',
  },
  {
    service: 'Pentesting Web · Básico',
    scope: 'Aplicación · endpoints',
    price: '$100',
    leadTime: '1–3 semanas',
  },
  {
    service: 'Pentesting Web · Completo',
    scope: 'App + API y diversas vulnerabilidades',
    price: '$250',
    leadTime: '3-6 semanas',
  },
  {
    service: 'Asesoramiento DevSecOps',
    scope: 'Análisis a fondo de toda la estructura',
    price: '$700',
    leadTime: '1 mes',
  },
  {
    service: 'OSINT / Exposición',
    scope: 'Dominios, personas y filtraciones',
    price: '$50',
    leadTime: '3–5 días hábiles',
  },
  {
    service: 'Consultoría premium',
    scope: '1 mes junto al equipo de desarrollo para securizar, proteger y testear · 1-3 juntas diarias (lun–vie)',
    price: '$700',
    leadTime: '1 mes',
  },
]
