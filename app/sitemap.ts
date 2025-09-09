// app/sitemap.ts
import { MetadataRoute } from 'next'
import { routing, getPathname } from '@/i18n/routing'
import type { Locale } from '@/i18n/routing'

const host = process.env.NEXT_PUBLIC_HOST || 'https://hdcodelap.com'

// Type helper for href parameter
type Href = Parameters<typeof getPathname>[0]['href']

// Interface cho route
interface SitemapRoute {
  href: Href
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastModified?: Date
}

// Static routes - sử dụng href với type chính xác
const staticRoutes: SitemapRoute[] = [
  { 
    href: '/' as const, 
    priority: 1.0, 
    changeFrequency: 'daily',
    lastModified: new Date()
  },
  { 
    href: '/contact' as const, 
    priority: 0.9, 
    changeFrequency: 'daily',
    lastModified: new Date()
  },
  { 
    href: '/about' as const, 
    priority: 0.9, 
    changeFrequency: 'daily',
    lastModified: new Date()
  },
  { 
    href: '/privacy' as const, 
    priority: 0.9, 
    changeFrequency: 'daily',
    lastModified: new Date()
  },
  { 
    href: '/product' as const, 
    priority: 0.9, 
    changeFrequency: 'daily',
    lastModified: new Date()
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Lấy dynamic routes
    const dynamicRoutes = await getDynamicRoutes()
    
    // Combine routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes]
    
    // Generate sitemap entries - TẠO ENTRY CHO TẤT CẢ LOCALES
    const sitemapEntries: MetadataRoute.Sitemap = []
    
    // Tạo entries cho mỗi route với tất cả locales
    allRoutes.forEach(route => {
      routing.locales.forEach(locale => {
        const url = getUrl(route.href, locale)
        
        sitemapEntries.push({
          url: url,
          lastModified: route.lastModified || new Date(),
          changeFrequency: route.changeFrequency,
          priority: route.priority,
        })
      })
    })

    return sitemapEntries
  } catch (error) {
    console.error('Sitemap generation error:', error)
    
    // Return basic sitemap nếu có lỗi
    const fallbackEntries: MetadataRoute.Sitemap = routing.locales.map(locale => ({
      url: getUrl('/' as const, locale),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    }))
    
    return fallbackEntries
  }
}

// Function tạo URL đúng với pathnames đã cấu hình
function getUrl(href: Href, locale: Locale): string {
  try {
    const pathname = getPathname({ locale, href })
    return host + pathname
  } catch (error) {
    console.error(`Error generating URL for ${String(href)} with locale ${locale}:`, error)
    // Fallback to basic URL construction
    return `${host}/${locale}${href === '/' ? '' : href}`
  }
}

// Function lấy dynamic routes
async function getDynamicRoutes(): Promise<SitemapRoute[]> {
  const dynamicRoutes: SitemapRoute[] = []
  
  try {
    // TODO: Thêm logic lấy dynamic content ở đây
    // Ví dụ cho blog posts:
    // const posts = await fetchBlogPosts()
    // posts.forEach(post => {
    //   dynamicRoutes.push({
    //     href: { pathname: '/news/[slug]', params: { slug: post.slug } },
    //     priority: 0.7,
    //     changeFrequency: 'weekly',
    //     lastModified: new Date(post.updatedAt)
    //   })
    // })
    
  } catch (error) {
    console.error('Error fetching dynamic routes:', error)
  }
  
  return dynamicRoutes
}