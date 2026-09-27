import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import siteConfig from '../src/seo/site-config.json' with { type: 'json' }

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const urls = siteConfig.pages
  .map(({ path }) => `  <url><loc>${escapeXml(new URL(path, siteConfig.siteUrl).href)}</loc></url>`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await mkdir(resolve('dist'), { recursive: true })
await writeFile(resolve('dist/sitemap.xml'), sitemap, 'utf8')