// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxt/eslint", "nuxt-swiper"],
  runtimeConfig: {
    public: {
      ipInfo: process.env.IP_INFO, //   abf1430f6f24fd'
      baseUrl: process.env.BASE_URL, // 'http://localhost:8000'
    },
  },
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
