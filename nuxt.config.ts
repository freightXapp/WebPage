// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css',],
  // modules: ['nuxt-swiper',  '@nuxt/image',],
  // build: {
  //   transpile: ['swiper']
  // },
  // swiper:{
  //   styleLang: 'css',
  // },
  modules: ['nuxt-svgo'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_global.scss" as *;',
        },
      },
    },
  },
  css: ['~/assets/scss/main.scss'],

})