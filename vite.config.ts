import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig } from 'vite'
import type { ViteSSGOptions } from 'vite-ssg'
import siteConfig from './src/seo/site-config.json' with { type: 'json' }
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
const config: UserConfig & { ssgOptions: ViteSSGOptions } = {
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: false },
      manifest: {
        name: 'Caravaning Tools - narzędzia dla podróżujących',
        short_name: 'Caravaning Tools',
        description: 'Kalkulatory i narzędzia dla caravaningowców.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f7f8f5',
        theme_color: '#17362f',
        lang: 'pl-PL',
        icons: [
          { src: '/pwa/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/pwa/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
      },
    }),
  ],
  ssgOptions: {
    dirStyle: 'flat',
    includedRoutes: () => siteConfig.pages.map(({ path }) => path),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}

export default defineConfig(({ mode }) => {
  config.appType = mode === 'production' ? 'mpa' : 'spa'
  config.ssgOptions.includedRoutes = () => siteConfig.pages.map(({ path }) => path)
  return config
})
