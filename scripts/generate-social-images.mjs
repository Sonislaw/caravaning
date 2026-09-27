import { mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import sharp from 'sharp'
import siteConfig from '../src/seo/site-config.json' with { type: 'json' }

const imageCopy = {
  home: {
    title: ['Narzędzia dla', 'caravaningowców'],
    subtitle: 'Kalkulatory i planowanie podróży',
  },
  dmc: {
    title: ['Kalkulator DMC', 'zestawu'],
    subtitle: 'Samochód + przyczepa kempingowa',
  },
  consumption: {
    title: ['Kalkulator', 'spalania'],
    subtitle: 'Paliwo, koszt trasy i tankowania',
  },
  privacy: {
    title: ['Polityka', 'prywatności'],
    subtitle: 'Prywatność w Caravaning Tools',
  },
}

const xmlEscape = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const createSvg = (page) => {
  const copy = imageCopy[page.key]

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#17362f"/>
  <path d="M570 630 815 315 1010 420 1200 270v360z" fill="#315848"/>
  <path d="M750 630 1000 370l200 90v170z" fill="#547662"/>
  <path d="m794 630 220-255 186 105v150z" fill="#75917a"/>
  <path d="M785 630c83-108 181-186 290-233 42-18 83-30 125-37v270z" fill="#d8dfcb"/>
  <path d="M850 630c92-108 198-184 350-234" fill="none" stroke="#9ea992" stroke-width="7" stroke-dasharray="18 24"/>
  <path d="M0 455c145-46 258-58 385-23 83 23 158 68 239 69v129H0z" fill="#24483b"/>
  <path d="M0 513c143-37 238-34 365-5 89 20 157 39 259 36v86H0z" fill="#345e4a"/>
  <circle cx="1040" cy="112" r="49" fill="#d9c68c" opacity=".92"/>
  <g transform="translate(858 367)">
    <rect x="0" y="38" width="218" height="94" rx="15" fill="#f5f4ec"/>
    <path d="M39 38V5h92l42 33z" fill="#f5f4ec"/>
    <path d="M53 14h70v24H53z" fill="#547d75"/>
    <path d="M137 14h25l29 24h-54z" fill="#547d75"/>
    <rect x="14" y="56" width="9" height="18" rx="4" fill="#c48c59"/>
    <circle cx="50" cy="132" r="20" fill="#192b26"/>
    <circle cx="50" cy="132" r="9" fill="#d8dfcb"/>
    <circle cx="175" cy="132" r="20" fill="#192b26"/>
    <circle cx="175" cy="132" r="9" fill="#d8dfcb"/>
  </g>
  <rect x="0" y="0" width="748" height="630" fill="#17362f" opacity=".9"/>
  <path d="M0 0h16v630H0z" fill="#a4bc8c"/>
  <text x="82" y="119" fill="#c7d8bd" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="3">CARAVANING TOOLS</text>
  <text x="82" y="270" fill="#ffffff" font-family="Arial, sans-serif" font-size="64" font-weight="700">${xmlEscape(copy.title[0])}</text>
  <text x="82" y="347" fill="#ffffff" font-family="Arial, sans-serif" font-size="64" font-weight="700">${xmlEscape(copy.title[1])}</text>
  <text x="84" y="407" fill="#d7e1d4" font-family="Arial, sans-serif" font-size="25">${xmlEscape(copy.subtitle)}</text>
  <rect x="84" y="467" width="72" height="5" rx="2.5" fill="#a4bc8c"/>
  <text x="84" y="523" fill="#bdcbbd" font-family="Arial, sans-serif" font-size="19">caravaning.zgrana.pl</text>
</svg>`
}

const createAppIconSvg =
  () => `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#17362f"/>
  <path d="M72 359c85-29 142-37 217-18 51 13 92 39 148 39v84H72z" fill="#315848"/>
  <path d="M72 405c83-21 139-18 213-2 51 11 94 20 152 16v45H72z" fill="#547662"/>
  <path d="M131 259h173c19 0 35 15 35 34v89H96v-88c0-19 16-35 35-35z" fill="#f5f4ec"/>
  <path d="M159 259v-67h99l58 67z" fill="#f5f4ec"/>
  <path d="M178 207h69v38h-69z" fill="#547d75"/>
  <path d="M260 207h18l34 38h-52z" fill="#547d75"/>
  <circle cx="157" cy="384" r="36" fill="#14251f"/>
  <circle cx="157" cy="384" r="16" fill="#d8dfcb"/>
  <circle cx="322" cy="384" r="36" fill="#14251f"/>
  <circle cx="322" cy="384" r="16" fill="#d8dfcb"/>
  <path d="M373 171a45 45 0 1 1-90 0 45 45 0 0 1 90 0" fill="#d9c68c"/>
</svg>`

const outputDirectory = resolve('public/og')
await mkdir(outputDirectory, { recursive: true })

for (const page of siteConfig.pages) {
  const outputPath = join(resolve('public'), page.socialImage.replace(/^\//, ''))
  await sharp(Buffer.from(createSvg(page)))
    .png({ compressionLevel: 9 })
    .toFile(outputPath)
}

const pwaIconDirectory = resolve('public/pwa')
await mkdir(pwaIconDirectory, { recursive: true })

for (const [fileName, size] of [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['icon-maskable-512.png', 512],
]) {
  await sharp(Buffer.from(createAppIconSvg()))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(pwaIconDirectory, fileName))
}
