import { useHead, useSeoMeta } from '@unhead/vue'
import siteConfig from './site-config.json'

export type SeoPageKey = 'home' | 'dmc'

interface SitePageSeo {
  key: SeoPageKey
  path: string
  title: string
  description: string
  socialImage: string
  socialImageAlt: string
}

export type JsonLdValue = string | number | boolean | JsonLdObject | JsonLdValue[]

export interface JsonLdObject {
  [key: string]: JsonLdValue
}

const sitePages = siteConfig.pages as SitePageSeo[]
export const siteUrl = siteConfig.siteUrl
export const siteName = siteConfig.siteName

export function usePageSeo(pageKey: SeoPageKey, structuredData: JsonLdObject) {
  const page = sitePages.find(({ key }) => key === pageKey)

  if (!page) {
    throw new Error(`Missing SEO configuration for page: ${pageKey}`)
  }

  const canonicalUrl = new URL(page.path, siteUrl).href
  const socialImageUrl = new URL(page.socialImage, siteUrl).href

  useSeoMeta({
    title: page.title,
    description: page.description,
    robots: 'index,follow,max-image-preview:large',
    ogTitle: page.title,
    ogDescription: page.description,
    ogType: 'website',
    ogUrl: canonicalUrl,
    ogSiteName: siteName,
    ogLocale: 'pl_PL',
    ogImage: socialImageUrl,
    ogImageAlt: page.socialImageAlt,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: page.title,
    twitterDescription: page.description,
    twitterImage: socialImageUrl,
    twitterImageAlt: page.socialImageAlt,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      },
    ],
  })
}
