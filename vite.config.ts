import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      // Formato de array para poder anclar los patrones con regex: con las
      // claves de objeto, 'lottie-web' tambien haria match con sus subrutas.
      alias: [
        {find: '@', replacement: path.resolve(__dirname, '.')},
        // lottie-react no expone subrutas, asi que importar LottieLight igual
        // arrastra los otros dos motores via su barrel. Como lottie-web no se
        // declara libre de side-effects, Rollup no puede descartarlos y los tres
        // terminan en el bundle: ~760 kB y dos usos de eval.
        //
        // Solo renderizamos LottieLight, asi que redirigimos los motores pesados
        // al light: queda un unico motor, sin eval. Technology.json no usa
        // expressions, que es lo unico que el build light no soporta.
        {
          find: /^lottie-web$/,
          replacement: 'lottie-web/build/player/lottie_light.js',
        },
        {
          find: /^lottie-web\/build\/player\/lottie_svg\.js$/,
          replacement: 'lottie-web/build/player/lottie_light.js',
        },
      ],
    },
    server: {
      // HMR se desactiva en AI Studio mediante la variable DISABLE_HMR.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
