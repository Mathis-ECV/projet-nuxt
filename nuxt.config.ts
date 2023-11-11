// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    isProd: process.env.NETLIFY_ENV === 'production',
    datoToken: process.env.NUXT_DATO_TOKEN,
    public: {
      isProd: process.env.NETLIFY_ENV === 'production',
      datoToken: process.env.NUXT_DATO_TOKEN
    }
  },
  apollo: {
    clients: {
      default: './config/apollo.ts'
    }
  },
  app: {
    head: {
      script: [
        { type: 'text/javascript', hid: 'main', src: '/assets/js/main.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/assets/main.css' },
      ],
    }
  }
})