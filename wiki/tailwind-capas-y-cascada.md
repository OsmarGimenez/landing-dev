---
date: 2026-09-12
type: article
tags: [tailwind, css, cascada, capas, gotcha]
status: vigente
---

# Por qué una utilidad de Tailwind no aplica

## El síntoma

Escribís `className="btn-secondary px-10 py-5"` y el botón sale con el padding
de `.btn-secondary`, no con el que pediste. Ninguna herramienta avisa: la
utilidad está en el HTML, está en el CSS generado, y aun así pierde.

En este proyecto pasó dos veces, con dos caras distintas:

1. Los botones del hero quedaban de distinta altura, porque uno respetaba el
   padding del marcado y el otro no.
2. Las secciones tintadas se veían más angostas que la pantalla, porque
   `.section-padding` metía `max-w-7xl` en el propio `<section>` y eso limitaba
   también su fondo.

## La causa

Tailwind v4 emite su CSS dentro de capas, en este orden:

```
@layer theme, base, components, utilities;
```

Dentro de una cascada de capas, **lo que está fuera de toda capa gana siempre**,
sin importar el orden ni la especificidad. No es una regla de Tailwind, es
[cómo funciona `@layer` en CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer).

Entonces esto:

```css
/* suelto, fuera de toda capa */
.btn-secondary {
  @apply px-6 py-3 border-2;
}
```

le gana a `.px-10`, que vive en `@layer utilities`. El `@apply` no tiene nada
que ver: el problema es dónde está declarada la regla que lo contiene.

## La solución

Declarar los componentes dentro de la capa que les corresponde:

```css
@layer components {
  .btn-secondary {
    @apply px-6 py-3 border-2;
  }
}
```

Ahora `utilities` viene después y el marcado puede pisar el componente, que es
justamente para lo que uno escribe `px-10` en el JSX.

## Cómo reconocerlo

Si una utilidad no tiene efecto:

1. Confirmá que la clase existe en el CSS generado (`grep` en `dist/assets/*.css`).
   Si no está, es un problema de detección de clases, no de cascada.
2. Si está, mirá en qué capa cae la regla que gana. En DevTools las reglas
   sueltas aparecen sin la etiqueta de capa.
3. Antes de subir la especificidad o tirar un `!important`, preguntá si la
   regla debería estar en `@layer components`. Casi siempre la respuesta es sí.

## Por qué importa más de lo que parece

El modo de fallar es silencioso: el código dice una cosa y la página hace otra,
sin error ni advertencia. En este repo hubo utilidades muertas en el marcado
durante meses —`px-12 py-6` en los botones de contacto no hacía nada— y el
diseño se había acomodado alrededor del bug. Al arreglar la capa, todos esos
botones cambiaron de tamaño de golpe.

Relacionado: [[historia-de-optimizacion-del-bundle]]
