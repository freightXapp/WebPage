// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxt/eslint", "nuxt-swiper"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_global.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
});
