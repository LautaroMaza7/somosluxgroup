import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {
    experimental: {
      wasm: true
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: 'somosluxgroup | Agencia de Marketing y Desarrollo para Inmobiliarias',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'keywords',
          content: 'agencia inmobiliaria, marketing inmobiliario, desarrollo inmobiliario, branding inmobiliario, renders inmobiliarios, posicionamiento inmobiliario, generación de leads, ventas inmobiliarias, somosluxgroup, consultoría inmobiliaria, estrategia comercial, proyectos inmobiliarios',
        },
        {
          name: 'description',
          content: 'somosluxgroup es la agencia líder en marketing, branding y desarrollo digital para inmobiliarias y desarrollos inmobiliarios. Impulsamos tu proyecto con estrategias innovadoras, posicionamiento, generación de leads y soluciones integrales para el sector inmobiliario.',
        },
        {
          name: 'author',
          content: 'somosluxgroup - Agencia de Marketing y Desarrollo Inmobiliario',
        },
        {
          property: 'og:title',
          content: 'somosluxgroup | Agencia de Marketing y Desarrollo para Inmobiliarias',
        },
        {
          property: 'og:description',
          content: 'Agencia líder en marketing, branding y desarrollo digital para inmobiliarias y desarrollos inmobiliarios. Estrategias, posicionamiento y generación de leads para tu proyecto.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'es_ES',
        },
        {
          property: 'og:image',
          content: '/dark/assets/imgs/lux_white.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'somosluxgroup | Agencia de Marketing y Desarrollo para Inmobiliarias',
        },
        {
          name: 'twitter:description',
          content: 'somosluxgroup: Estrategias, branding y desarrollo digital para inmobiliarias y desarrollos inmobiliarios.',
        },
        {
          name: 'twitter:image',
          content: '/dark/assets/imgs/lux_white.png',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/dark/assets/imgs/lux_white.png' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
      ],
      script: [
        { src: '/dark/assets/js/plugins.js' },
        { src: '/dark/assets/js/TweenMax.min.js' },
        { src: '/dark/assets/js/charming.min.js' },
        { src: '/dark/assets/js/countdown.js' },
        { src: '/dark/assets/js/ScrollTrigger.min.js' },
        { src: '/dark/assets/js/gsap.min.js' },
        { src: '/dark/assets/js/splitting.min.js' },
        { src: '/dark/assets/js/isotope.pkgd.min.js' },
        { src: '/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/dark/assets/js/ScrollSmoother.min.js' },
        // { src: '/showcase/dark/assets/js/anime.min.js' },
        { src: '/dark/assets/js/scripts.js', defer: true },
      ],
    },
  },
  css: ['swiper/css/bundle', '@/styles/globals.css'],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
