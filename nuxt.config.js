// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  
  app: {
    // Load a google font across all pages
    head: {
      title: 'Nuxt 3 app',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/prismic'],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  devtools: {
    enabled: true
  },
  // Remove default nuxt prefixes for components
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    }
  ],
  css: [
      '@/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/scss/foundations/_variables.scss";
            @import "@/scss/foundations/_mixins.scss";
          `
        }
      }
    }
  }
})