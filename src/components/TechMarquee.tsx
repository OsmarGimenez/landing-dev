import type { CSSProperties, Key } from 'react';
import { ICONS, TECH_STACK } from '../constants';
import { BrandIcon } from './BrandIcon';

type Tech = {
  name: string;
  slug: string | null;
  icon: string;
  color: string;
};

/**
 * Glifo de marca de una tecnologia. Si no hay uno (Oracle, SQL Server y CI/CD
 * no estan en simple-icons por marca registrada), cae al icono generico.
 */
const TechGlyph = ({tech, size = 22}: {tech: Tech; size?: number}) => {
  if (tech.slug) {
    const glifo = <BrandIcon slug={tech.slug} size={size} />;
    if (glifo) return glifo;
  }

  const Generico = ICONS[tech.icon as keyof typeof ICONS];
  return <Generico size={size} className="shrink-0" aria-hidden="true" />;
};

type ChipProps = {
  tech: Tech;
  /** Marca la copia del carril, que se oculta a lectores de pantalla. */
  copia?: boolean;
  key?: Key;
};

const TechChip = ({tech, copia = false}: ChipProps) => (
  <li
    aria-hidden={copia || undefined}
    className="flex shrink-0 items-center gap-2.5 rounded-lg border border-brand-border bg-brand-card/60 px-4 py-2.5 text-brand-muted transition-colors duration-300 hover:text-[var(--brand)]"
    style={{'--brand': tech.color} as CSSProperties}
  >
    <TechGlyph tech={tech} />
    <span className="whitespace-nowrap text-sm font-medium">{tech.name}</span>
  </li>
);

/**
 * Una fila del carrusel.
 *
 * El truco es duplicar exactamente la lista y desplazar el carril un 50%: al
 * terminar, el segundo juego esta donde arrancó el primero y el salto no se
 * ve. La copia va oculta para lectores de pantalla, que si no leerian todo
 * dos veces.
 */
const MarqueeRow = ({
  items,
  seconds,
  reverse = false,
}: {
  items: Tech[];
  seconds: number;
  reverse?: boolean;
}) => (
  <div className="marquee-viewport overflow-hidden py-2">
    <ul
      className={`marquee-track flex w-max gap-3 ${reverse ? 'marquee-track--reverse' : ''}`}
      style={{'--marquee-seconds': `${seconds}s`} as CSSProperties}
    >
      {items.map(t => (
        <TechChip key={t.name} tech={t} />
      ))}
      {items.map(t => (
        <TechChip key={`${t.name}-copia`} tech={t} copia />
      ))}
    </ul>
  </div>
);

/**
 * Las tecnologias en dos carriles que corren en sentidos opuestos. Reemplaza a
 * la grilla de cuatro tarjetas: ocupa un tercio del alto y se mira sola.
 */
export const TechMarquee = () => {
  const all = TECH_STACK.flatMap(c => c.items as Tech[]);
  const mitad = Math.ceil(all.length / 2);

  return (
    <div className="marquee-mask flex flex-col gap-1">
      <MarqueeRow items={all.slice(0, mitad)} seconds={38} />
      <MarqueeRow items={all.slice(mitad)} seconds={46} reverse />
    </div>
  );
};
