import { TECH_ICON_PATHS } from './techIcons';

type BrandIconProps = {
  /** Slug en TECH_ICON_PATHS, p. ej. "whatsapp" o "react". */
  slug: string;
  size?: number;
  className?: string;
  /** Texto accesible. Sin el, el icono queda oculto para lectores de pantalla. */
  title?: string;
};

/**
 * Glifo oficial de una marca.
 *
 * Devuelve null si el slug no existe, para que un nombre mal escrito no tumbe
 * la pagina entera; quien lo use decide si mostrar algo en su lugar.
 */
export const BrandIcon = ({slug, size = 24, className = '', title}: BrandIconProps) => {
  const path = TECH_ICON_PATHS[slug];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d={path} />
    </svg>
  );
};
