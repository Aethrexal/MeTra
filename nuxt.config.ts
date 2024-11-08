// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase"],
  nitro: {
    preset: "node-server",
  },
  runtimeConfig: {
    tvdbApiKey: "", // Overridden by NUXT_TVDB_API_KEY
    public: {
      websiteTitle: "MeTra",
      version: "0.0.1",
      registraionEnabled: "", // Overridden by NUXT_PUBLIC_REGISTRATION_ENABLED
      tvdbUrl: "", // Overridden by NUXT_PUBLIC_TVDB_URL
    },
  },
});
