import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig } from 'vite'
import type { ViteSSGOptions } from 'vite-ssg'
import siteConfig from './src/seo/site-config.json' with { type: 'json' }
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const config: UserConfig & { ssgOptions: ViteSSGOptions } = {
  base: '/',
  plugins: [vue(), vueDevTools(), tailwindcss()],
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
