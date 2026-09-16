---
date: 2026-09-15
type: article
tags: [csp, seguridad, trusted-types, dependencias, gotcha]
status: vigente
---

# Vivir con una CSP estricta

El sitio sirve una Content Security Policy sin `'unsafe-inline'` y con Trusted
Types. Eso da 100 en Best Practices y protección real, pero cambia una regla
del juego: **agregar una dependencia puede romper el sitio entero y el build
no se entera.**

## Lo que pasó

Al sumar `@vercel/analytics`, la página quedó **completamente en blanco**. Ni
una sección, ni el `h1`, `root` vacío.

La librería crea un `<script>` y le asigna la URL como cadena a `.src`. Con
`require-trusted-types-for 'script'` eso no se bloquea en silencio: **lanza un
`TypeError`**. Y como la llamada sube por el render de React, no falló solo la
analítica — no se montó nada.

Lo importante: `npm run lint` y `npm run build` pasaron en verde. Sin abrir el
navegador se publicaba un sitio vacío, y como `vercel.json` sirve la misma
política, también en producción.

## La solución, sin aflojar la CSP

La salida fácil habría sido sacar `require-trusted-types-for`. La correcta es
declarar una política `default`, que es la que el navegador consulta cuando
llega una cadena a un sink de script:

```ts
politicas.createPolicy('default', {
  createScriptURL: (url: string) => {
    if (URLS_DE_SCRIPT_PERMITIDAS.some(p => url.endsWith(p))) return url;
    throw new TypeError(`URL de script no permitida: ${url}`);
  },
});
```

Vive en `src/main.tsx` y corre **antes** de montar React, o la analítica llega
primero. La protección se mantiene: solo pasa la URL de la lista, cualquier
otra sigue lanzando.

En la CSP se agrega `trusted-types default`, que además limita la creación de
políticas a esa sola.

## La política actual

```
default-src 'self'
script-src 'self'
style-src 'self' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data:
connect-src 'self'
object-src 'none'
base-uri 'none'
frame-ancestors 'none'
form-action 'self'
trusted-types default
require-trusted-types-for 'script'
upgrade-insecure-requests
```

Vive en **dos lugares que tienen que quedar sincronizados**: `vercel.json`, que
es lo que se sirve en producción, y `preview.headers` del `vite.config.ts`, que
existe para poder auditarla localmente en vez de descubrir en producción si
algo rompe. Si se cambia una, se cambia la otra.

## Antes de agregar una dependencia

1. **¿Inyecta un script?** Va a chocar con Trusted Types. Necesita entrar en
   `URLS_DE_SCRIPT_PERMITIDAS`, y su origen en `script-src` si no es del propio
   dominio.
2. **¿Pide datos a un tercero?** Su origen va en `connect-src`.
3. **¿Carga imágenes externas?** `img-src` hoy es `'self' data:`. Una imagen de
   otro dominio no se ve, y no avisa.
4. **¿Inyecta estilos o un iframe?** `style-src` y `frame-src`.

Después de agregarla, **cargar la página y mirar la consola**. Con esta CSP,
lint y build verdes no dicen nada sobre si el sitio arranca.

## Lo que no rompe, aunque lo parezca

- **JSON-LD.** `<script type="application/ld+json">` es un bloque de datos, no
  script ejecutable, así que `script-src` no aplica. Verificado.
- **Los estilos que React pone con `style={{...}}`.** Se aplican por CSSOM, que
  no es lo que `style-src` gobierna. Solo los `<style>` y los atributos `style`
  del HTML servido están sujetos.
- **React 19 con Trusted Types.** Es compatible; no asigna `innerHTML` por su
  cuenta.

Relacionado: [[lighthouse-100]]
