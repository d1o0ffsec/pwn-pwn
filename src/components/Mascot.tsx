/**
 * Mascota oficial: una medusa PIXEL ART en tonos azules.
 *
 * Se dibuja con una rejilla de cuadrados (20x20). Para editarla:
 *  - Cambia colores en PALETTE
 *  - Dibuja la campana en BELL_MAP ('.' = vacío)
 *  - Dibuja el escudo en SHIELD_MAP
 *  - Ajusta los píxeles de los tentáculos en TENTACLE_BASES
 */
import './Mascot.css'

interface MascotProps {
  className?: string
}

const PIXEL = 20

const PALETTE: Record<string, string> = {
  O: '#071522', // contorno
  B: '#38bdf8', // azul campana
  L: '#a5f3fc', // brillo
  D: '#2563eb', // sombra
  W: '#f8fcff', // brillo de ojos
  K: '#071522', // ojos / candado
  C: '#7dd3fc', // acentos claros
  T: '#38bdf8', // tentáculos
}

// Campana (cara muy simple: ojos de 2x2 + sonrisa de 3 píxeles)
const BELL_MAP = [
  '........................',
  '........................',
  '........................',
  '.........OOOOO..........',
  '........OLBBBBO.........',
  '.......OLBBBBBBO........',
  '......OBBBBBBBBBO.......',
  '.....OBBBBBBBBBBBO......',
  '....OBBBWKBBBWKBBBO.....',
  '....OBBBKKBBBKKBBBO.....',
  '...OBBBBBBBBBBBBBBBO....',
  '...OBBBBBBKBKBBBBBBO....',
  '...ODDDDDDDKDDDDDDDO....',
  '...ODDDDDDDDDDDDDDDDO...',
]

// Escudo con candado (se dibuja encima de los tentáculos)
const SHIELD_MAP = [
  '..OOOOO..',
  '.OLLDDLO.',
  '.OLLDDLO.',
  '.OLLDDLO.',
  '..OLLLO..',
  '...OLO...',
  '....O....',
]
const SHIELD_OFFSET = { x: 8, y: 17 }

// Columnas base de los 6 tentáculos (se ondulan con seno)
const TENTACLE_BASES = [4, 7, 10, 13, 16, 19]
const TENTACLE_LENGTH = 13

// Destellitos cuadrados alrededor de la medusa
const SPARKLES: Array<[number, number]> = [
  [1, 5],
  [21, 4],
  [2, 19],
  [21, 22],
]

function mapToRects(map: string[], offsetX = 0, offsetY = 0) {
  return map.flatMap((row, y) =>
    [...row].flatMap((char, x) => {
      const fill = PALETTE[char]
      if (!fill) return []
      return [
        {
          key: `${offsetX + x}-${offsetY + y}`,
          x: (offsetX + x) * PIXEL,
          y: (offsetY + y) * PIXEL,
          fill,
        },
      ]
    }),
  )
}

export default function Mascot({ className = '' }: MascotProps) {
  const bellPixels = mapToRects(BELL_MAP)
  const shieldPixels = mapToRects(SHIELD_MAP, SHIELD_OFFSET.x, SHIELD_OFFSET.y)

  const tentacles = TENTACLE_BASES.map((base, i) =>
    Array.from({ length: TENTACLE_LENGTH }, (_, j) => {
      const x = base + Math.round(Math.sin(j * 0.5 + i * 0.8) * 1.1)
      return { x, y: 14 + j }
    }),
  )

  return (
    <svg
      className={`mascot ${className}`}
      viewBox="0 0 480 560"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Mascota medusa pixel art de pwn&pwn"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Campana */}
      <g className="mascot__bell">
        {bellPixels.map((p) => (
          <rect key={p.key} x={p.x} y={p.y} width={PIXEL} height={PIXEL} fill={p.fill} />
        ))}
      </g>

      {/* Tentáculos */}
      <g className="mascot__tentacles">
        {tentacles.map((tentacle, i) => (
          <g
            key={i}
            className="mascot__tentacle"
            style={{ animationDelay: `${i * -0.17}s` }}
          >
            {tentacle.map(({ x, y }, j) => (
              <rect
                key={j}
                x={x * PIXEL}
                y={y * PIXEL}
                width={PIXEL}
                height={PIXEL}
                fill={j === tentacle.length - 1 ? PALETTE.C : PALETTE.T}
              />
            ))}
          </g>
        ))}
      </g>

      {/* Escudo */}
      <g className="mascot__shield">
        {shieldPixels.map((p) => (
          <rect key={p.key} x={p.x} y={p.y} width={PIXEL} height={PIXEL} fill={p.fill} />
        ))}
      </g>

      {/* Destellos */}
      <g className="mascot__sparkles">
        {SPARKLES.map(([cx, cy], i) =>
          [
            [cx, cy],
            [cx, cy - 1],
            [cx, cy + 1],
            [cx - 1, cy],
            [cx + 1, cy],
          ].map(([x, y], j) => (
            <rect
              key={`${i}-${j}`}
              className="mascot__sparkle"
              style={{ animationDelay: `${i * -0.3}s` }}
              x={x * PIXEL}
              y={y * PIXEL}
              width={PIXEL}
              height={PIXEL}
              fill={PALETTE.C}
            />
          )),
        )}
      </g>
    </svg>
  )
}
