---
date: 2026-09-12
type: article
tags: [diseno, svg, nanduti, identidad, paraguay]
status: vigente
---

# Ñandutí generativo como identidad visual

## Por qué existe

El sitio arrastraba los cinco tics del landing generado por IA: fotos de stock
de Unsplash, ilustración plana de «desarrollador con plantitas», grilla de
puntos de fondo, degradado en el titular y píldoras apiladas con punto que
late. Cambiar colores no arregla eso; hay que cambiar de dónde salen las
formas.

El ñandutí —«telaraña» en guaraní— es encaje paraguayo tejido en *soles*:
radios que salen del centro, anillos concéntricos y relleno geométrico entre
anillo y anillo. Sirve como ancla porque es local de verdad, no decorativo: ser
de Paraguay es la ventaja frente al perfil anónimo de marketplace.

## Cómo está hecho

`src/components/Nanduti.tsx` genera los soles por cálculo, no los dibuja a
mano. Cada uno recibe una semilla —normalmente el índice del ítem— que elige
familia de tejido y desfase:

```ts
const WEAVES = [
  {spokes: 12, rings: 3},
  {spokes: 16, rings: 4},
  {spokes: 20, rings: 3},
];
```

Sobre esa urdimbre se dibujan cuatro capas:

1. **Radios**: líneas del centro al borde.
2. **Anillos concéntricos**, el exterior con trazo más grueso.
3. **Zigzag** entre los dos anillos exteriores, alternando entre uno y otro en
   cada radio. Es lo que da la textura de telaraña.
4. **Rombos** sobre el anillo del medio, como relleno entre bandas.

La función `polar()` pone el cero arriba en lugar de a la derecha, que es más
intuitivo al pensar en radios.

## Tres componentes

- **`NandutiSun`** — un sol suelto. Se usa como glifo chico en la cabecera del
  hero y como marca de agua en «Sobre mí».
- **`NandutiHero`** — tres soles concéntricos girando a 140s, 95s y 60s en
  sentidos alternos. Reemplaza la ilustración plana.
- **`NandutiWeave`** — trama de fondo con soles chicos repetidos vía
  `<pattern>`. Reemplaza la grilla de puntos.

## Dónde ya no se usa, y por qué

Al principio el sol también ilustraba las siete tarjetas de servicio, en lugar
de las fotos de stock. Funcionaba como identidad, pero no como información: era
idéntico en función en las siete y no decía nada de lo que se vende. Un
visitante que mira «Tienda online» no aprendía nada del dibujo.

Las tarjetas pasaron a usar `ServiceDiagram`, que representa el entregable de
cada servicio —una página con su botón, una rejilla de productos, dos sistemas
conectados— en el mismo lenguaje de trazo lineal, así que la coherencia se
mantiene.

El criterio que quedó: **el ñandutí es marca, no explicación.** Va donde el
trabajo es identificar el sitio como suyo; donde hay algo que comunicar, va un
diagrama que lo comunique.

## Decisiones que conviene no romper

- **Todo se pinta con `currentColor`.** Ningún color propio: así hereda la
  paleta y funciona igual en claro y oscuro sin duplicar definiciones.
- **`vectorEffect="non-scaling-stroke"`.** Sin eso, el encaje engorda cuando la
  tarjeta estira el SVG y pierde la finura del trazo.
- **Las animaciones son CSS, no JS.** Están en `index.css` como
  `.nanduti-spin`, con su bloque en `prefers-reduced-motion`. El giro es muy
  lento a propósito: tiene que leerse como tejido que respira, no como spinner.
- **La semilla es el índice.** Si reordenás los servicios, cambia qué tejido le
  toca a cada uno. Es intencional: ninguna tarjeta es «la del sol lindo».

## Efecto secundario

Reemplazar la ilustración plana permitió sacar el motor de animación y su JSON
—780 kB entre los dos— y dejar el sitio en un solo chunk. Ver
[[historia-de-optimizacion-del-bundle]].
