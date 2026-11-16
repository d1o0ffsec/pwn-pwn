export type ServiceCategory = 'Pentesting' | 'Ciberseguridad' | 'DevSecOps'

export interface Service {
  id: string
  title: string
  category: ServiceCategory
  description: string
  /** Clave del icono (ver ServiceCard.tsx) */
  icon: 'crosshair' | 'network' | 'search' | 'shield' | 'git' | 'compass'
  tags: string[]
}

/** ✏️ EDITABLE: agrega, quita o ajusta los servicios aquí. */
export const services: Service[] = [
  {
    id: 'pentest-web',
    title: 'Pentesting de Aplicaciones Web',
    category: 'Pentesting',
    description:
      'Identificación y explotación controlada de vulnerabilidades en aplicaciones y APIs web (OWASP Top 10), con reportes claros y recomendaciones accionables.',
    icon: 'crosshair',
    tags: ['OWASP', 'APIs', 'Web'],
  },
  {
    id: 'pentest-redes',
    title: 'Pentesting de Redes e Infraestructura',
    category: 'Pentesting',
    description:
      'Evaluación de superficie de ataque, segmentación, servicios expuestos y configuraciones inseguras en entornos on-premise y cloud.',
    icon: 'network',
    tags: ['Redes', 'Cloud', 'Infraestructura'],
  },
  {
    id: 'osint',
    title: 'Investigación OSINT',
    category: 'Ciberseguridad',
    description:
      'Recolección y análisis de inteligencia de fuentes abiertas para medir la exposición de información de tu organización y de sus personas.',
    icon: 'search',
    tags: ['Inteligencia', 'Exposición', 'Recon'],
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad Integral',
    category: 'Ciberseguridad',
    description:
      'Diagnóstico de tu postura de seguridad: políticas, control de accesos, concientización y buenas prácticas adaptadas a tu operación real.',
    icon: 'shield',
    tags: ['Postura', 'Riesgos', 'Concienciación'],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Secure CI/CD',
    category: 'DevSecOps',
    description:
      'Integración de seguridad en el ciclo de desarrollo: análisis de dependencias, secretos e imágenes, y pipelines seguros desde el primer commit.',
    icon: 'git',
    tags: ['CI/CD', 'SAST/SCA', 'Contenedores'],
  },
  {
    id: 'consultoria',
    title: 'Asesoría y Consultoría',
    category: 'Ciberseguridad',
    description:
      'Acompañamiento especializado para fortalecer tus defensas, priorizar riesgos y tomar decisiones técnicas con criterio y presupuesto claro.',
    icon: 'compass',
    tags: ['Estrategia', 'Arquitectura', 'Soporte'],
  },
]
