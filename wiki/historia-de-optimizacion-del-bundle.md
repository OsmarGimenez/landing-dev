---
date: 2026-09-12
type: article
tags: [performance, bundle, vite, lottie, tree-shaking]
status: vigente
---

# Cómo el bundle pasó de 1.2 MB a 417 kB

Registro de las cuatro etapas, porque cada una enseñó algo distinto y en dos
de ellas la solución obvia resultó ser la equivocada.

## Punto de partida

Un chunk único de 1.243 kB (252 kB gzip). La composición:

| Pieza | Peso | % |
|---|---|---|
| `Technology.json` inlineado | ~502 kB | 40% |
| `lottie-web` | ~280 kB | 23% |
| `react` + `react-dom` | ~140 kB | 11% |
| `motion` | ~100 kB | 8% |
| Código propio + iconos | ~220 kB | 18% |

Lottie solo era el 63%. Y estaba dentro de un `hidden lg:flex`: **todo
visitante de celular descargaba y parseaba 780 kB de algo que nunca veía.**

## Etapa 1 — Sacar el JSON del bundle y cargar bajo demanda

`import technologyData from './assets/Technology.json'` hace que Vite lo
**inline dentro del JS**. Moverlo a `public/` y pedirlo por URL sacó 502 kB del
chunk de una.

Sumado a `React.lazy` para el player y un gate de `matchMedia('(min-width: 1024px)')`
—el mismo breakpoint que ya usaba el CSS—, el chunk principal quedó en 376 kB
y el celular dejó de bajar 907 kB.

**Lección:** un `hidden` de CSS oculta, no evita la descarga. Si algo pesado no
se ve en un breakpoint, hay que condicionar el montaje, no solo la visibilidad.

## Etapa 2 — Migrar a lottie-react para sacar el `eval`

`lottie-web` usa `eval` en su motor de expresiones. La migración **empeoró
todo**: el chunk pasó de 333 kB a 761 kB y aparecieron dos avisos de `eval` en
vez de uno.

La causa: `lottie-react` v3 expone tres builds (`Lottie`, `LottieSvg`,
`LottieLight`) y cada uno importa su propio `lottie-web`. Importar
`LottieLight` desde el barrel arrastra los tres, y como `lottie-web` no se
declara libre de side-effects, Rollup no puede descartar los que no se usan.
El paquete tampoco expone subrutas, así que no hay forma de importar el light
directamente.

Se resolvió redirigiendo los motores pesados al light con `resolve.alias`,
usando regex anclados (`/^lottie-web$/`) porque con clave string el alias
también matchea las subrutas y se rompe el reemplazo. Resultado: 199 kB y cero
`eval`.

**Lección:** «migrar a la librería más liviana» no alcanza si se importa desde
un barrel. Medir el build después de migrar, siempre.

## Etapa 3 — Iconos de marca sin dependencia

Para el carrusel hacían falta glifos reales de 26 tecnologías. En lugar de
depender de `simple-icons` en runtime —3.459 iconos— se instaló el paquete, se
extrajeron los 26 paths que hacían falta a `src/components/techIcons.ts` y se
desinstaló. Son ~37 kB de path data que comprimen a ~10 kB.

Oracle, SQL Server y LinkedIn no están en el set por marca registrada.

**Lección:** para un puñado de assets estáticos de un paquete enorme,
extraerlos en tiempo de desarrollo sale más barato que confiar en el
tree-shaking.

## Etapa 4 — Borrar Lottie entero

Al reemplazar la ilustración plana por [[nanduti-generativo]], Lottie quedó sin
uso. Se fueron la dependencia, el alias del `vite.config.ts` y los 581 kB de
`Technology.json`.

## Estado actual

Un solo chunk de **417,73 kB (137,64 kB gzip)**, sin chunk secundario y sin
JSON. En desktop el total bajó de ~1,16 MB a 417 kB.

El chunk creció 37 kB por los paths de iconos y aun así el total cayó dos
tercios: el trabajo grande no fue optimizar la carga de Lottie sino darse
cuenta de que no hacía falta Lottie.

**Lección general:** las tres primeras etapas optimizaron algo que la cuarta
terminó borrando. Antes de invertir en hacer más liviana una dependencia,
preguntar si tiene que estar.
