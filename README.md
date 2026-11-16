# pwn&pwn — Sitio web profesional

Sitio web construido desde cero con **React + TypeScript + Vite** y **Bun**. Pensado para hostearse en **GitHub Pages** con despliegue automático.

## Requisitos

- [Bun](https://bun.sh) (recomendado) o Node 20+

## Comandos

```bash
bun install       # instalar dependencias
bun run dev       # servidor de desarrollo (http://localhost:5173)
bun run build     # compilar + chequeo de tipos → carpeta dist/
bun run preview   # previsualizar el build
```

## Estructura

Todo está separado en componentes individuales, cada uno con su propio archivo `.css`, para que sea fácil localizar y corregir problemas.

```
src/
├── App.tsx                 # compone las secciones del sitio
├── index.css               # estilos globales, colores y utilidades
├── components/
│   ├── Navbar.tsx          # barra de navegación (con menú móvil)
│   ├── Hero.tsx            # portada
│   ├── Mascot.tsx          # mascota medusa pixel art (SVG animado)
│   ├── SectionHeading.tsx  # encabezado reutilizable de sección
│   ├── Services.tsx        # grilla de servicios
│   ├── ServiceCard.tsx     # tarjeta individual de servicio
│   ├── About.tsx           # sobre pwn&pwn
│   ├── Quote.tsx           # tabla de cotización aproximada
│   ├── Contact.tsx         # contacto
│   ├── ContactCard.tsx     # tarjeta individual de contacto
│   └── Footer.tsx          # pie de página
└── data/
    ├── site.ts             # correo, teléfono, LinkedIn y menú
    ├── services.ts         # listado de servicios ✏️ editable
    └── quote.ts            # tabla de cotización ✏️ editable
```

## ✏️ Qué editar

- **Correo, teléfono y LinkedIn:** `src/data/site.ts`
- **Servicios:** `src/data/services.ts`
- **Precios y textos de cotización:** `src/data/quote.ts`
- **Colores y tipografías:** variables en `:root` de `src/index.css`
- **Mascota pixel art:** `src/components/Mascot.tsx` (mapa de píxeles, paleta y tentáculos) y `Mascot.css` (animaciones tipo `steps`)
- **Favicon:** `public/favicon.svg`

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica automáticamente en cada push a `main`.

1. Sube el código a tu repo (`d1o0ffsec/pwn-pwn`).
2. En GitHub ve a **Settings → Pages → Build and deployment**.
3. En **Source**, elige **GitHub Actions**.
4. Listo: en cada push a `main` se desplegará en `https://d1o0ffsec.github.io/pwn-pwn/`.

> El `vite.config.ts` usa `base: './'`, por lo que también funciona si renombras el repositorio.
