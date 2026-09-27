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

const outputDirectory = resolve('public/og')
await mkdir(outputDirectory, { recursive: true })

for (const page of siteConfig.pages) {
  const outputPath = join(resolve('public'), page.socialImage.replace(/^\//, ''))
  await sharp(Buffer.from(createSvg(page)))
    .png({ compressionLevel: 9 })
    .toFile(outputPath)
}
