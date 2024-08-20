// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: '/favicon-32x32.png',
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/manifest.json" },
        {rel:"mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"},
      ],
      title: "rr-service",
      meta: [{ name: "description", content: "Оклейка защитной пленкой" }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
