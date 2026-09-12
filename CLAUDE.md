# landing-dev — Sitio + Vault de Obsidian

Este repositorio contiene dos cosas: el **sitio** (React 19 + Vite 6 +
Tailwind v4, la landing comercial de Osmar Giménez) y el **vault de Obsidian**
(`raw/`, `wiki/`, `outputs/`).

## Vault de Obsidian — seguí las best practices

Estructura de 3 carpetas (Karpathy):

- **`raw/`** — depósito: notas diarias, ideas sueltas, apuntes rápidos sin pulir.
  Las notas diarias se llaman `YYYY-MM-DD-daily.md` y usan la plantilla de
  frontmatter existente (date, type, tags).
- **`wiki/`** — artículos codificados: documentación técnica estructurada,
  conceptos destilados desde raw/. Un tema por nota.
- **`outputs/`** — entregables: reportes, checklists, documentos listos para
  compartir con el cliente.

Convenciones al escribir notas:

1. **Notas atómicas**: una idea por archivo, título descriptivo en kebab-case
   (ej. `wiki/tailwind-capas-y-cascada.md`).
2. **`[[wiki-links]]`** para conectar notas entre sí — enlazá liberalmente;
   un link a una nota que aún no existe marca algo que vale la pena escribir.
3. **Frontmatter YAML** en toda nota: `date`, `type` (daily | article | output),
   `tags`.
4. **Flujo raw → wiki → outputs**: lo crudo entra por raw/, se destila a
   wiki/ cuando madura, y sale por outputs/ cuando es entregable.
5. **Registrá las sesiones**: al cerrar una sesión de trabajo importante,
   agregá un resumen en la nota diaria de raw/ con link-backs a las notas
   wiki/ relacionadas. Cada conversación se acumula como memoria permanente.
6. La config del editor (`.obsidian/`) está gitignoreada; las notas SÍ se
   versionan.
7. **Documentación técnica profunda: escribila en `wiki/`**, no en comentarios
   kilométricos ni en el chat.

## Tareas y aprendizaje

- **`tasks/lessons.md`** — registro de errores y la regla derivada de cada uno.
  Releerlo al inicio de cada sesión. Después de cada corrección del usuario,
  actualizarlo con el patrón del error para no repetirlo.
- **`docs/`** — documentación del proyecto orientada a consumo externo.

## El sitio

Stack: React 19, Vite 6, Tailwind v4 (`@tailwindcss/vite`, sin `postcss.config`),
TypeScript estricto, `motion` para animaciones. Sin dependencias de UI.

Comandos:

```bash
npm run dev      # servidor local en :3000
npm run lint     # tsc --noEmit
npm run build    # vite build
```

### Reglas específicas de este proyecto

1. **Es una página personal, no de una agencia.** Primera persona del singular
   siempre. Nunca «nosotros» ni nada que sugiera un equipo: ser una persona
   concreta y de Paraguay es la ventaja competitiva frente al perfil anónimo
   de marketplace.
2. **El sitio vende soluciones, no tecnología.** Cada servicio encabeza con el
   problema dicho por el cliente («Mi sistema va lento»), no con la categoría
   técnica. El stack tiene su propia sección; no repetirlo en las tarjetas.
3. **No inventar datos.** Casos de clientes, métricas, precios y plazos se
   piden al usuario. Nunca estimarlos ni completarlos con ejemplos creíbles.
4. **Clases de componente dentro de `@layer components`.** Si van sueltas, le
   ganan a `@layer utilities` y las utilidades del marcado dejan de aplicar en
   silencio. Ver [[tailwind-capas-y-cascada]].
5. **Identidad visual: ñandutí.** Las ilustraciones se generan por cálculo en
   `src/components/Nanduti.tsx`. Nada de fotos de stock ni de ilustraciones
   planas genéricas. Ver [[nanduti-generativo]].
6. **Cuidar el peso.** El sitio entra en un solo chunk; antes pesaba tres veces
   más. Antes de sumar una dependencia pesada, evaluar si se puede resolver con
   SVG generado. Ver [[historia-de-optimizacion-del-bundle]].

### Verificación antes de dar algo por terminado

`npm run lint` y `npm run build` tienen que pasar limpios. Para cambios
visuales, revisar en 1440x900 y 375x812.

Cuidado al medir en el panel del navegador: si no está pintando, las
transiciones CSS se congelan y `getComputedStyle` devuelve valores viejos
—las capturas salen negras—. Antes de declarar roto un estilo animado,
desactivar las transiciones y volver a medir.
