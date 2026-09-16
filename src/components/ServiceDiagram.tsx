/**
 * Diagramas de servicio.
 *
 * Reemplazan al sol de ñandutí en las tarjetas: el sol es textura de marca y
 * era identico en funcion en las siete, asi que no decia nada del servicio.
 * Cada diagrama representa el entregable —una pagina, un carrito, dos sistemas
 * conectados— para que la tarjeta comunique antes de que alguien lea.
 *
 * Mismo lenguaje que el ñandutí: trazo lineal, `currentColor` para heredar la
 * paleta en ambos temas, y trazo que no escala para que no engorde cuando la
 * tarjeta estira el SVG. El ñandutí se queda donde si funciona como marca:
 * hero, fondo y «Sobre mí».
 */

import type { ReactNode } from 'react';

export type ServiceDiagramKind =
  | 'landing'
  | 'catalogo'
  | 'tienda'
  | 'integraciones'
  | 'optimizacion'
  | 'automatizacion'
  | 'erp';

/** Relleno tenue, para las masas que no son contorno. */
const masa = (opacity: number) => ({fill: 'currentColor', stroke: 'none', opacity});

const DIAGRAMS: Record<ServiceDiagramKind, ReactNode> = {
  // Una pagina con un solo objetivo: el titular manda y el boton remata.
  landing: (
    <>
      <rect x={38} y={26} width={124} height={148} rx={8} strokeWidth={1.5} />
      <line x1={38} y1={52} x2={162} y2={52} strokeWidth={1} opacity={0.5} />
      <rect x={50} y={35} width={24} height={8} rx={2} {...masa(0.3)} />
      <rect x={54} y={70} width={92} height={11} rx={3} {...masa(0.45)} />
      <rect x={54} y={88} width={64} height={11} rx={3} {...masa(0.45)} />
      <rect x={54} y={108} width={92} height={4} rx={2} {...masa(0.2)} />
      <rect x={54} y={118} width={74} height={4} rx={2} {...masa(0.2)} />
      <rect x={54} y={134} width={54} height={17} rx={6} {...masa(0.9)} />
      {/* El puntero es lo que convierte la pagina en una accion. */}
      <path d="M112 142 L112 162 L118 156 L123 166 L127 164 L122 154 L130 154 Z" {...masa(0.85)} />
    </>
  ),

  // Rejilla de productos: se ven muchos de un vistazo, sin carrito.
  catalogo: (
    <>
      {[26, 80, 134].map(x =>
        [38, 104].map(y => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width={40} height={54} rx={5} strokeWidth={1.3} />
            <rect x={x + 6} y={y + 7} width={28} height={21} rx={3} {...masa(0.22)} />
            <rect x={x + 6} y={y + 34} width={24} height={4} rx={2} {...masa(0.4)} />
            <rect x={x + 6} y={y + 43} width={14} height={4} rx={2} {...masa(0.25)} />
          </g>
        )),
      )}
    </>
  ),

  // Ciclo de compra completo: los productos terminan en el carrito.
  tienda: (
    <>
      {[
        {x: 74, y: 40},
        {x: 100, y: 32},
        {x: 126, y: 40},
      ].map(p => (
        <rect key={p.x} x={p.x - 9} y={p.y} width={18} height={18} rx={3} {...masa(0.3)} />
      ))}
      <g strokeWidth={1.2} opacity={0.55}>
        <path d="M74 62 L74 74" />
        <path d="M100 54 L100 74" />
        <path d="M126 62 L126 74" />
      </g>
      <path d="M44 80 L58 80 L66 122 L142 122" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 90 L154 90 L146 122" strokeWidth={1.6} strokeLinejoin="round" />
      <circle cx={80} cy={142} r={8} strokeWidth={1.5} />
      <circle cx={136} cy={142} r={8} strokeWidth={1.5} />
    </>
  ),

  // Dos sistemas que dejan de necesitar que alguien copie datos a mano.
  integraciones: (
    <>
      <rect x={16} y={70} width={52} height={60} rx={7} strokeWidth={1.5} />
      <rect x={132} y={70} width={52} height={60} rx={7} strokeWidth={1.5} />
      <g {...masa(0.3)}>
        <rect x={26} y={84} width={32} height={4} rx={2} />
        <rect x={26} y={96} width={24} height={4} rx={2} />
        <rect x={142} y={84} width={32} height={4} rx={2} />
        <rect x={142} y={96} width={24} height={4} rx={2} />
      </g>
      <circle cx={100} cy={100} r={15} strokeWidth={1.5} />
      <circle cx={100} cy={100} r={5} {...masa(0.85)} />
      <g strokeWidth={1.4}>
        <path d="M68 92 L79 92" />
        <path d="M76 88 L81 92 L76 96" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M132 108 L121 108" />
        <path d="M124 104 L119 108 L124 112" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </>
  ),

  // El mismo sistema, con menos espera: las barras se acortan.
  optimizacion: (
    <>
      <ellipse cx={100} cy={46} rx={38} ry={13} strokeWidth={1.5} />
      <path d="M62 46 L62 104" strokeWidth={1.5} />
      <path d="M138 46 L138 104" strokeWidth={1.5} />
      <path d="M62 104 A 38 13 0 0 0 138 104" strokeWidth={1.5} />
      <path d="M62 68 A 38 13 0 0 0 138 68" strokeWidth={1} opacity={0.45} />
      <path d="M62 86 A 38 13 0 0 0 138 86" strokeWidth={1} opacity={0.45} />
      <rect x={50} y={128} width={100} height={8} rx={4} {...masa(0.22)} />
      <rect x={50} y={144} width={62} height={8} rx={4} {...masa(0.45)} />
      <rect x={50} y={160} width={30} height={8} rx={4} {...masa(0.9)} />
    </>
  ),

  // Tareas que se repiten solas, sin que nadie tenga que acordarse.
  automatizacion: (
    <>
      <path
        d="M100 44 A 56 56 0 1 1 56 66"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path d="M88 36 L100 44 L90 55" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={156} cy={100} r={6} {...masa(0.75)} />
      <circle cx={100} cy={156} r={6} {...masa(0.75)} />
      <circle cx={52} cy={116} r={6} {...masa(0.45)} />
      <path d="M84 100 L96 112 L119 88" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Stock, ventas y facturacion dejan de vivir en planillas sueltas.
  erp: (
    <>
      <g strokeWidth={1.2} opacity={0.5}>
        <path d="M100 48 L100 74" />
        <path d="M54 100 L74 100" />
        <path d="M146 100 L126 100" />
        <path d="M100 152 L100 126" />
      </g>
      <rect x={82} y={74} width={36} height={52} rx={7} strokeWidth={1.6} />
      <rect x={90} y={86} width={20} height={4} rx={2} {...masa(0.5)} />
      <rect x={90} y={96} width={20} height={4} rx={2} {...masa(0.35)} />
      <rect x={90} y={106} width={12} height={4} rx={2} {...masa(0.35)} />
      {[
        {x: 80, y: 22},
        {x: 18, y: 86},
        {x: 146, y: 86},
        {x: 80, y: 152},
      ].map(p => (
        <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={40} height={26} rx={5} strokeWidth={1.3} {...{opacity: 0.85}} />
      ))}
    </>
  ),
};

type Props = {
  kind: ServiceDiagramKind;
  className?: string;
};

export const ServiceDiagram = ({kind, className = ''}: Props) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    vectorEffect="non-scaling-stroke"
    aria-hidden="true"
  >
    {DIAGRAMS[kind]}
  </svg>
);
