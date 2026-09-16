import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

/**
 * Encabezados de seguridad.
 *
 * Tienen que coincidir con los de `vercel.json`, que es lo que se sirve en
 * produccion. Se replican en el preview local para poder auditarlos con
 * Lighthouse antes de desplegar, en vez de descubrir en produccion si la CSP
 * rompe algo.
 *
 * El build no tiene scripts ni estilos inline y solo pide dos origenes
 * externos (las fuentes de Google), asi que la politica puede ser estricta sin
 * necesidad de 'unsafe-inline'.
 */
const securityHeaders: Record<string, string> = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    // `trusted-types default` limita la creacion de politicas a esa sola: la
    // que define src/main.tsx, que solo deja pasar la URL de la analitica.
    'trusted-types default',
    "require-trusted-types-for 'script'",
    'upgrade-insecure-requests',
  ].join('; '),
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR se desactiva en AI Studio mediante la variable DISABLE_HMR.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    preview: {
      headers: securityHeaders,
    },
  };
});
