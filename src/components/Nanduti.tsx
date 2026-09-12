/**
 * Ñandutí — encaje paraguayo, "telaraña" en guaraní.
 *
 * Se teje en soles: radios que salen del centro, anillos concéntricos y relleno
 * geométrico entre anillo y anillo. Acá los soles se generan por cálculo en vez
 * de dibujarse a mano, así cada uno sale distinto a partir de su semilla y
 * ninguna sección depende de una foto de stock.
 *
 * Todo se pinta con `currentColor`, de modo que hereda la paleta del sitio y
 * funciona igual en claro y en oscuro sin definir colores propios.
 */

import type { CSSProperties } from 'react';

const TAU = Math.PI * 2;

/** Punto sobre una circunferencia, con el cero arriba en vez de a la derecha. */
const polar = (cx: number, cy: number, r: number, turn: number) => {
  const angle = turn * TAU - Math.PI / 2;
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
};

/** Las tres familias de sol que se alternan segun la semilla. */
const WEAVES = [
  {spokes: 12, rings: 3},
  {spokes: 16, rings: 4},
  {spokes: 20, rings: 3},
];

type SunProps = {
  /** Elige la familia de tejido y el desfase; normalmente el indice del item. */
  seed?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Un sol de ñandutí completo, pensado para ocupar su caja como ilustración.
 *
 * El viewBox es cuadrado y el trazo no escala, así el encaje mantiene su grosor
 * cuando la tarjeta lo estira.
 */
export const NandutiSun = ({seed = 0, className = '', style}: SunProps) => {
  const size = 200;
  const c = size / 2;
  const outer = c - 4;

  const {spokes, rings} = WEAVES[seed % WEAVES.length];
  const offset = (seed % 2) * (0.5 / spokes);

  const radii = Array.from(
    {length: rings},
    (_, i) => outer * ((i + 1) / rings),
  );

  // Radios: la urdimbre sobre la que se teje todo lo demas.
  const spokeLines = Array.from({length: spokes}, (_, i) => {
    const [x, y] = polar(c, c, outer, i / spokes + offset);
    return <line key={`s${i}`} x1={c} y1={c} x2={x} y2={y} />;
  });

  // Zigzag entre los dos anillos exteriores: el punto que le da al ñandutí su
  // textura de telaraña, alternando entre un anillo y el otro en cada radio.
  const inner = radii[radii.length - 2] ?? outer * 0.6;
  const zigzag = Array.from({length: spokes + 1}, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const [x, y] = polar(c, c, r, i / spokes + offset);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  // Rombos sobre el anillo del medio: el relleno que separa banda de banda.
  const midRadius = radii[Math.floor(rings / 2)] ?? outer * 0.5;
  const diamondSpan = 0.5 / spokes;
  const diamonds = Array.from({length: spokes}, (_, i) => {
    const turn = i / spokes + offset;
    const [ax, ay] = polar(c, c, midRadius + 7, turn);
    const [bx, by] = polar(c, c, midRadius, turn + diamondSpan);
    const [dx, dy] = polar(c, c, midRadius - 7, turn);
    const [ex, ey] = polar(c, c, midRadius, turn - diamondSpan);
    return (
      <path
        key={`d${i}`}
        d={`M${ax.toFixed(2)},${ay.toFixed(2)} L${bx.toFixed(2)},${by.toFixed(2)} L${dx.toFixed(2)},${dy.toFixed(2)} L${ex.toFixed(2)},${ey.toFixed(2)} Z`}
      />
    );
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
    >
      <g strokeWidth={1} opacity={0.55}>{spokeLines}</g>

      {radii.map((r, i) => (
        <circle
          key={`r${i}`}
          cx={c}
          cy={c}
          r={r}
          strokeWidth={i === radii.length - 1 ? 1.6 : 0.9}
          opacity={i === radii.length - 1 ? 0.9 : 0.5}
        />
      ))}

      <path d={zigzag} strokeWidth={1} opacity={0.75} />

      <g strokeWidth={0.9} opacity={0.65}>{diamonds}</g>

      {/* Roseta del centro, donde arranca el tejido. */}
      <circle cx={c} cy={c} r={5} fill="currentColor" opacity={0.8} stroke="none" />
      <circle cx={c} cy={c} r={11} strokeWidth={1} opacity={0.6} />
    </svg>
  );
};

/**
 * Composición del hero: tres soles concéntricos girando a distinta velocidad y
 * en sentidos alternos, como los paños de ñandutí que se cosen unos sobre
 * otros.
 *
 * Reemplaza a la ilustración plana de "desarrollador con plantitas", que era
 * el elemento que más delataba plantilla generada. De paso permitió sacar el
 * motor de animación y su JSON, que juntos pesaban 780 kB.
 */
export const NandutiHero = ({className = ''}: {className?: string}) => (
  <div className={`relative aspect-square ${className}`}>
    <NandutiSun
      seed={2}
      className="nanduti-spin absolute inset-0 h-full w-full text-brand-primary opacity-70"
      style={{animationDuration: '140s'}}
    />
    <NandutiSun
      seed={1}
      className="nanduti-spin nanduti-spin--reverse absolute inset-[14%] h-[72%] w-[72%] text-brand-secondary opacity-60"
      style={{animationDuration: '95s'}}
    />
    <NandutiSun
      seed={0}
      className="nanduti-spin absolute inset-[30%] h-[40%] w-[40%] text-brand-primary opacity-90"
      style={{animationDuration: '60s'}}
    />
  </div>
);

/**
 * Trama de fondo: soles chicos repetidos, al modo del ñandutí cosido en paños.
 *
 * Reemplaza a la grilla de puntos generica. Va muy tenue y detras de todo, asi
 * que se lee como textura y no compite con el texto.
 */
export const NandutiWeave = ({className = ''}: {className?: string}) => {
  const tile = 120;
  const c = tile / 2;
  const spokes = 8;

  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="nanduti-weave"
          width={tile}
          height={tile}
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth={0.8}>
            {Array.from({length: spokes}, (_, i) => {
              const [x, y] = polar(c, c, 34, i / spokes);
              return <line key={i} x1={c} y1={c} x2={x} y2={y} />;
            })}
            <circle cx={c} cy={c} r={34} />
            <circle cx={c} cy={c} r={18} />
            <circle cx={c} cy={c} r={2.5} fill="currentColor" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nanduti-weave)" />
    </svg>
  );
};
