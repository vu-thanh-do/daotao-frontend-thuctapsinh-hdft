import { MetadataRoute } from 'next'

const host = process.env.NEXT_PUBLIC_HOST || 'https://hdcodelap.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',  
          '/temp/',
          '/*/admin/', // Disallow admin pages cho tất cả locales
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*/admin/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*/admin/',
        ],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host: host,
  }
}

