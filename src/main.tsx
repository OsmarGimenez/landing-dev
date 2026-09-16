import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Analytics} from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';

/**
 * Política de Trusted Types.
 *
 * La CSP exige `require-trusted-types-for 'script'`, asi que asignar una
 * cadena a `script.src` lanza en vez de cargar. `@vercel/analytics` hace
 * exactamente eso, y como el error sube por el render de React, la pagina
 * entera quedaba en blanco.
 *
 * La salida no es aflojar la CSP sino declarar una politica `default`, que es
 * la que el navegador consulta cuando llega una cadena a un sink de script.
 * Aca solo pasa la URL de la analitica: cualquier otra lanza, que es
 * justamente la proteccion que Trusted Types aporta contra XSS en el DOM.
 *
 * Tiene que correr antes de montar React, o la analitica llega primero.
 */
const URLS_DE_SCRIPT_PERMITIDAS = ['/_vercel/insights/script.js'];

const politicas = (window as {trustedTypes?: {createPolicy: Function}}).trustedTypes;

if (politicas?.createPolicy) {
  try {
    politicas.createPolicy('default', {
      createScriptURL: (url: string) => {
        if (URLS_DE_SCRIPT_PERMITIDAS.some(permitida => url.endsWith(permitida))) {
          return url;
        }
        throw new TypeError(`URL de script no permitida por Trusted Types: ${url}`);
      },
    });
  } catch {
    // Si ya existe una politica `default`, createPolicy lanza. No es un
    // problema: significa que alguien la definio antes.
  }
}

/**
 * Analitica de Vercel.
 *
 * Hasta ahora no habia forma de saber si algo de esto funciona: que seccion
 * convierte, donde se van, si alguien toca el boton de WhatsApp.
 *
 * En produccion el script y el beacon salen del propio dominio
 * (`/_vercel/insights/...`), asi que la CSP no necesita ningun origen externo.
 * No usa cookies ni localStorage, asi que tampoco hace falta banner de
 * consentimiento.
 *
 * Falta un paso que no es de codigo: activar Web Analytics en el panel de
 * Vercel del proyecto. Sin eso el script no se sirve y no se registra nada.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
