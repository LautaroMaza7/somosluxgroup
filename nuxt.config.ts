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
      title: 'SomosLuxGroup | Agencia de Marketing y Desarrollo para Inmobiliarias',
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
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'googlebot',
          content: 'index, follow',
        },
        {
          name: 'keywords',
          content: 'agencia inmobiliaria, marketing inmobiliario, desarrollo inmobiliario, branding inmobiliario, renders inmobiliarios, posicionamiento inmobiliario, generación de leads, ventas inmobiliarias, somosluxgroup, consultoría inmobiliaria, estrategia comercial, proyectos inmobiliarios, crm inmobiliario, ventas digitales, equipo de ventas, agencia creativa',
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
          name: 'publisher',
          content: 'somosluxgroup',
        },
        {
          property: 'og:title',
          content: 'somosluxgroup | Agencia de Marketing y Desarrollo para Inmobiliarias',
        },
        {
          property: 'og:site_name',
          content: 'somosluxgroup',
        },
        {
          property: 'og:description',
          content: 'Aceleradora comercial de desarrollos inmobiliarios.',
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
          property: 'og:locale:alternate',
          content: 'en_US',
        },
        {
          property: 'og:url',
          content: 'https://somosluxgroup.com/',
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
          name: 'twitter:site',
          content: '@somosluxgroup',
        },
        {
          name: 'twitter:creator',
          content: '@somosluxgroup',
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
        { rel: 'icon', type: 'image/png', href: '/dark/assets/imgs/favicon1.png' },
        // Google Fonts
        {
          rel: 'canonical',
          href: 'https://somosluxgroup.com/',
        },
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
        // Bloque JSON-LD para datos estructurados de la organización
        {
          type: 'application/ld+json',
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "somosluxgroup",
            "url": "https://somosluxgroup.com/",
            "logo": "https://somosluxgroup.com/dark/assets/imgs/lux_white.png",
            "description": "Agencia líder en marketing, branding y desarrollo digital para inmobiliarias y desarrollos inmobiliarios.",
            "sameAs": [
              "https://www.instagram.com/somosluxgroup/",
              "https://www.facebook.com/somosluxgroup/",
              "https://www.linkedin.com/company/somosluxgroup/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+54-9-11-2233-4455",
              "contactType": "customer service",
              "areaServed": "AR",
              "availableLanguage": ["Spanish", "English"]
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lavalle 1076",
              "addressLocality": "Ituzaingó",
              "addressRegion": "Buenos Aires",
              "postalCode": "1714",
              "addressCountry": "AR"
            }
          }`,
        },
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
