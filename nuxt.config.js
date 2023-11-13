// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening 
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/]
    }
  },
  
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
  modules: ['@nuxtjs/prismic', '@pinia/nuxt', '@nuxtjs/storybook'],
  storybook: {
    // Options
    url:'http://localhost:6006',
    port:6006
  },
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
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  },
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