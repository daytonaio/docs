/**
 * Language Detection with Static Page Preservation
 *
 * This catch-all route provides browser-based language detection while maintaining static
 * MDX page generation. Since we want to keep all content pages static for performance,
 * we cannot use Astro middleware (which would require server-side rendering and has no
 * access to request headers for static pages).
 *
 * Implementation:
 * - Used with a dynamic route with prerender=false to access request headers for language detection
 * - Implements custom request forwarding since Astro.rewrite() doesn't properly route to static pages
 * - Acts as a transparent proxy that fetches the appropriate localized content and forwards the response
 *
 * This approach preserves static generation benefits while enabling dynamic language routing.
 */
import config from '../../gt.config.json'

const defaultLocale = config.defaultLocale
const allLocales = [defaultLocale, ...config.locales]

/**
 * Detects preferred language from Accept-Language header
 */
export function getPreferredLanguage(request: Request): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  const supportedLocales = [defaultLocale, ...config.locales]
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => lang.split('-')[0]) // Convert en-US to en

  for (const lang of languages) {
    if (supportedLocales.includes(lang)) {
      return lang
    }
  }

  return defaultLocale // fallback
}

/**
 * Checks if a path segment contains a locale prefix to prevent infinite loops
 */
export function isLocalizedPath(slug: string | undefined): boolean {
  if (!slug) return false
  const firstSegment = slug.split('/')[0]
  return allLocales.includes(firstSegment)
}

/**
 * Creates a transparent proxy request to serve localized content
 * This bypasses Astro.rewrite() limitations with static routes
 */
export async function proxyLocalizedContent(
  targetPath: string,
  originalRequest: Request
): Promise<Response> {
  try {
    const targetUrl = new URL(targetPath, new URL(originalRequest.url).origin)

    const response = await fetch(targetUrl.toString(), {
      method: originalRequest.method,
      headers: originalRequest.headers,
      body: originalRequest.body,
    })
    console.log('Fetching:', targetUrl.toString())
    console.log('Response status:', response.status)

    // Create a new response with copied headers to avoid immutability issues
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    })
  } catch (error) {
    console.error('Proxy request failed:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

/**
 * Main routing handler for language detection and content serving
 */
export async function handleLanguageRouting(
  request: Request,
  slug: string = '',
  redirectFn: (path: string) => Response
): Promise<Response> {
  // Don't handle already-localized paths to prevent infinite loops
  if (isLocalizedPath(slug)) {
    console.log('isLocalizedPath', slug, 'returning 404')
    return new Response('Not Found', { status: 404 })
  }

  await new Promise(resolve => setTimeout(resolve, 2000))

  const preferredLanguage = getPreferredLanguage(request)

  if (preferredLanguage !== defaultLocale) {
    // Redirect to localized version (changes URL)
    console.log('redirecting to', `/docs/${preferredLanguage}/${slug}`)
    return redirectFn(`/docs/${preferredLanguage}/${slug}`)
  } else {
    // Proxy to English version (maintains clean URL)
    console.log('proxying to', `/docs/${defaultLocale}/${slug}`)
    return proxyLocalizedContent(`/docs/${defaultLocale}/${slug}`, request)
  }
}
