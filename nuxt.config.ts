import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  // ▼ ここから追加
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { name: 'description', content: '市川市周辺のIT技術者向けコミュニティ、Ichikawa.devの公式サイトです。' },

        // OGP
        { property: 'og:site_name', content: 'Ichikawa.dev' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.ichikawa-city.dev' },
        { property: 'og:title', content: 'Ichikawa.dev' },
        { property: 'og:description', content: '市川市周辺のIT技術者向けコミュニティ、Ichikawa.devの公式サイトです。' },
        { property: 'og:image', content: 'https://ichikawa-city.dev/images/ogp.png' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ichikawa_dev' },
        { name: 'twitter:creator', content: '@ichikawa_dev' },
        { name: 'twitter:image', content: 'https://ichikawa-city.dev/images/ogp.png' }
      ]
    }
  }
});