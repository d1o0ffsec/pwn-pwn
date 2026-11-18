/**
 * Datos globales del sitio.
 * Edita aquí el correo, teléfono y enlaces: se reflejan en todo el sitio.
 */
export const site = {
  name: 'pwn&pwn',
  tagline: 'Pentesting, Ciberseguridad y DevSecOps',
  email: 'd1o0ffsec@gmail.com',
  phoneDisplay: '56 6142 6776',
  phoneHref: 'tel:+5661426776',
  linkedin: 'https://www.linkedin.com/in/diego-ch%C3%A1vez-offsec',
  location: 'México · Remoto',
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Cotización', href: '#cotizacion' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const
