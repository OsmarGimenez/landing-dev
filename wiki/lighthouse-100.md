---
date: 2026-09-15
type: article
tags: [lighthouse, accesibilidad, performance, cls, csp, seo]
status: vigente
---

# Llegar a 100 en Lighthouse

Punto de partida, medido en Vercel: Performance 94, Accesibilidad 82, Best
Practices 81, SEO 100, Agentic Browsing 0/2.

## Antes que nada: el informe mentía en parte

El propio informe avisaba que había extensiones de Chrome afectando la corrida,
y los números lo confirmaban: decía «Reduce unused JavaScript — 4.458 KiB»
cuando el bundle entero pesa 418 kB, y «unused CSS — 226 KiB» con un CSS de
52 kB.

Corrido en limpio sobre el build local, el diagnóstico real era otro:
Accesibilidad 79, Best Practices 100, SEO 92, Agentic Browsing 33.

**Regla:** auditar siempre en incógnito o contra el build local. Un informe con
extensiones sirve para ver qué falla, no cuánto.

## Accesibilidad: 79 → 100

Cinco fallos, todos de nombres accesibles y estructura:

1. **Botón sin nombre.** El de cambiar tema solo tiene icono. Un icono no es un
   nombre: sin `aria-label` el botón es mudo para un lector de pantalla.
2. **Enlaces sin nombre.** GitHub y LinkedIn del pie, también solo icono.
3. **Contraste, dos casos.** Ver abajo.
4. **Orden de encabezados.** Un `<h4>` venía después de un `<h2>`, saltando el
   nivel 3. Pasó a `<h3>`.
5. **Sin landmark `main`.** No había forma de saltar al contenido.

El CTA del nav tenía un problema extra que la auditoría de escritorio no ve: en
móvil el texto se oculta y queda solo el icono, así que ahí el enlace quedaba
sin nombre. Lleva `aria-label` fijo.

## Los dos contrastes

**Nav CTA:** el texto heredaba `dark:text-neutral-300` (#d4d4d4) sobre el azul
#155dfc — 3.54, por debajo del 4.5 que pide WCAG. Se fuerza blanco desde `md`:
5.25.

**Botón de WhatsApp:** blanco sobre el verde de marca #25D366 da **1.98**. Es
un fallo conocido de ese verde.

Se evaluaron las opciones antes de elegir:

| Combinación | Contraste |
|---|---|
| Blanco sobre #25D366 | 1.98 |
| Blanco sobre #1DA851 | 3.10 |
| Blanco sobre #128C7E | 4.14 |
| **#052E16 sobre #25D366** | **7.52** |

Oscurecer el verde habría perdido lo que hace al botón reconocible de un
vistazo. Conservar el verde y oscurecer el texto pasa con holgura y además es
fiel a la marca, que usa texto oscuro sobre verde en sus propias burbujas.

El botón flotante es aparte: solo lleva el glifo, sin texto, así que la
auditoría de contraste no lo evalúa y conserva el blanco sobre verde, que es su
forma canónica.

## CLS 0.13 → 0.00

La traza señaló la causa exacta: las dos fuentes cargando por red. Con
`display=swap` el navegador dibuja con la fuente de reserva y después la
reemplaza, y ese reemplazo mueve el titular —que es enorme— y arrastra el resto
del hero.

En local daba 0.03 porque no hay latencia y las fuentes están cacheadas; en
producción, 0.13.

La corrección es `display=optional`: no hay reemplazo. Si la fuente no llega en
la ventana de bloqueo se usa la de reserva por esa visita y queda cacheada para
la siguiente. Medido después: **CLS 0.00**, y el insight de layout shift
desaparece.

El costo es que un visitante nuevo con conexión lenta puede ver el titular en
la fuente de reserva esa primera vez. Con `preconnect` ya configurado, en la
práctica la fuente llega a tiempo: verificado con `document.fonts.check()`.

**Alternativa mejor, pendiente:** alojar las fuentes en el propio dominio.
Elimina el origen externo, permite precargar el `.woff2` exacto y dejaría usar
`swap` sin salto. Requiere descargar los archivos al repo.

## Best Practices y las cabeceras

Los cuatro fallos de Best Practices en producción eran de cabeceras, no de
código: CSP, COOP, protección contra clickjacking y Trusted Types. Localmente
daba 100 porque `vite preview` no servía ninguna y esas auditorías no aplican.

Se agregó `vercel.json` con la política, y **las mismas cabeceras en
`preview.headers` del `vite.config.ts`**, para poder auditarlas localmente en
vez de descubrir en producción si algo rompe.

La CSP pudo quedar estricta —sin `'unsafe-inline'`— porque el build no tiene
scripts ni estilos inline y solo pide dos orígenes externos, los de las fuentes.

`require-trusted-types-for 'script'` era el riesgo: rompe cualquier asignación a
`innerHTML`. Se probó antes de confiar y React 19 resultó compatible: cero
violaciones en consola.

**Si alguna vez hay que sumar un tercero** (analítica, mapa, chat embebido), su
origen va agregado a la CSP en los dos lugares, que tienen que quedar
sincronizados.

## SEO y Agentic Browsing

Faltaban tres archivos estáticos: `robots.txt`, `sitemap.xml` y `llms.txt`.

El de `llms.txt` es el que puntúa Agentic Browsing, la categoría nueva que mide
si un agente de IA puede leer el sitio. Pedía un encabezado H1 y enlaces reales.
Describe los servicios y las vías de contacto, sin precios ni casos, que siguen
sin existir.

## Resultado

100 en las cuatro categorías, escritorio y móvil, con cero auditorías fallidas.
CLS 0.00.

Relacionado: [[tailwind-capas-y-cascada]], [[historia-de-optimizacion-del-bundle]]
