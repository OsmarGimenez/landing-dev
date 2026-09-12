# Lessons — landing-dev

Registro de errores corregidos y el patrón para no repetirlos. Releer al
inicio de cada sesión de trabajo. Actualizar después de cada corrección
del usuario (regla de Boris Cherny).

Formato por entrada:

## YYYY-MM-DD — Título corto del error
- **Qué pasó:** descripción del error o mal enfoque.
- **Corrección:** qué se hizo en su lugar.
- **Regla derivada:** instrucción concreta para no repetirlo.

---

## 2026-09-12 — Reglas de CSS sueltas le ganan a las utilidades de Tailwind
- **Qué pasó:** `.btn-secondary` declaraba `px-6 py-3` fuera de toda capa. Las
  utilidades del marcado (`px-10 py-5`) viven en `@layer utilities`, y en la
  cascada lo sin-capa le gana a lo que está en una capa. El padding escrito en
  el JSX se ignoraba en silencio. El mismo mecanismo hizo que las bandas
  tintadas quedaran angostas, porque `.section-padding` metía `max-w-7xl` en el
  propio `<section>`.
- **Corrección:** los componentes van dentro de `@layer components`, que en
  Tailwind v4 se evalúa antes que `utilities`. Ahora el marcado manda.
- **Regla derivada:** en este proyecto, toda clase de componente se declara
  dentro de `@layer components`. Si una utilidad escrita en el JSX no tiene
  efecto, sospechar de la cascada de capas antes que de la especificidad.

## 2026-09-12 — Mezclar botón relleno y delineado sin igualar la caja
- **Qué pasó:** al crear `.btn-whatsapp` sin borde, quedó 4px más bajo que
  `.btn-secondary`, que sí tiene `border-2`. El borde cuenta en la altura.
- **Corrección:** los botones rellenos llevan `border-2 border-transparent`.
- **Regla derivada:** si en una familia de botones alguno es delineado, todos
  reservan el mismo ancho de borde, aunque sea transparente.

## 2026-09-12 — Es una página personal, no de una agencia
- **Qué pasó:** se redactó una sección como «Cómo trabajamos» y la descripción
  de Odoo decía «Implementamos Odoo», en plural corporativo.
- **Corrección:** todo pasó a primera persona del singular.
- **Regla derivada:** el sitio habla de una persona. Nunca usar «nosotros» ni
  sugerir un equipo: ser una persona concreta y local es la ventaja frente al
  perfil anónimo de marketplace, no algo que haya que disimular.

## 2026-09-12 — No inventar datos de cliente ni métricas
- **Qué pasó:** al reestructurar hacia formato comercial faltaba el caso de
  Panambí, los precios y el FAQ. Existía la tentación de rellenar con
  placeholders creíbles.
- **Corrección:** se entregó solo lo que no dependía de datos reales y se
  dejaron esas secciones sin crear.
- **Regla derivada:** números de casos, precios y testimonios se piden; no se
  estiman ni se completan con ejemplos. Un número falso en un sitio comercial
  deja mal parado al dueño cuando un prospecto lo repite.

## 2026-09-12 — El panel del navegador congela estilos y da lecturas falsas
- **Qué pasó:** se reportó que el tema claro estaba roto. En realidad el panel
  no estaba pintando: las custom properties se actualizan al instante pero
  `background-color` tiene `transition-colors`, y una transición que no avanza
  devuelve el valor viejo. Las capturas salían negras por lo mismo.
- **Corrección:** se anularon las transiciones con un `<style>` temporal antes
  de medir, y ahí los valores fueron correctos.
- **Regla derivada:** antes de declarar roto un estilo animado o con
  transición, medirlo con las transiciones desactivadas. Una captura negra o un
  valor que no cambia es, casi siempre, el panel y no la página.
