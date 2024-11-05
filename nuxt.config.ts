// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  //modules: ["@nuxtjs/supabase"],
  nitro: {
    preset: "node-server",
  },
  runtimeConfig: {
    tvdbApiKey: process.env.NUXT_TVDB_API_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      websiteTitle: "MeTra",
      version: "0.0.1",
      registraionEnabled: process.env.NUXT_PUBLIC_REGISTRATION_ENABLED,
      tvdbUrl: process.env.NUXT_PUBLIC_TVDB_URL,
    },
  },
});
