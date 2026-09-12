---
date: 2026-09-12
type: article
tags: [git, ramas, landing-cv, main, historia]
status: vigente
---

# Las dos ramas del sitio

Este repo mantiene dos versiones vivas del sitio. No son «vieja y nueva» en el
sentido de que una esté para borrar: son dos piezas con propósitos distintos.

## `landing-cv` — la versión currículum

- **Commit:** `f75e9c9`
- **Congelada.** No recibe cambios; existe como respaldo de lo que había antes
  del giro comercial.

Habla de Osmar: stack, años, certificaciones. El visitante lo *evalúa*.

Seis secciones: hero → servicios → por qué elegirme → **descargar CV** → tech
stack → contacto. La sección de descarga del CV ocupaba una pantalla entera y
era el bloque más grande de la página.

Detalles que la distinguen:

- **Arranca en inglés** (`useState<'en' | 'es'>('en')`). Pensada para un
  público de reclutadores, no de clientes locales.
- **Sin WhatsApp.** La constante no existía.
- **Doce dependencias**, entre ellas `express`, `better-sqlite3`, `dotenv` y
  `@google/genai` — restos de experimentos que nunca llegaron al frontend
  pero seguían declarados.

## `main` — la versión comercial

Habla del problema del cliente y del resultado. El visitante *compra*.

El reordenamiento fue el cambio de fondo, más que el diseño:

| CV | Comercial |
|---|---|
| Hero «yo construyo» | Hero con problema y WhatsApp |
| Servicios técnicos | Servicios por problema del cliente |
| Por qué elegirme | (se mantiene, pero baja) |
| Descargar CV | Cómo trabajo |
| Tech Stack | Sobre mí, con el CV adentro |
| Contacto | Stack, al final |

El CV no desapareció: bajó de posición. Dejó de ser la oferta y pasó a ser el
respaldo, como un enlace discreto dentro de «Sobre mí».

Otros cambios: arranca en español, WhatsApp es el CTA principal, y quedan
cuatro dependencias.

## Por qué se conserva `landing-cv`

Tres razones prácticas:

1. **Respaldo.** Si el giro comercial no funciona, el punto de retorno está a
   un `git checkout` de distancia.
2. **Sigue sirviendo para postularse.** Para una búsqueda laboral, la versión
   CV en inglés es la apropiada; la comercial no.
3. **Referencia.** `git diff landing-cv main` muestra el cambio completo de
   enfoque en un solo comando.

## Reglas

- **No tocar `landing-cv`.** Está congelada a propósito. Si alguna vez hace
  falta actualizarla, sale de ahí una rama nueva.
- **Nada de force push** en ninguna de las dos.
- El vault (`raw/`, `wiki/`, `outputs/`, `docs/`, `tasks/`) vive solo en
  `main`. `landing-cv` es anterior a que existiera, y así queda: las notas
  documentan las dos ramas desde un solo lugar.

Relacionado: [[historia-de-optimizacion-del-bundle]] cuenta cómo se redujo el
peso en `main`, que es una de las diferencias más grandes entre ambas.
