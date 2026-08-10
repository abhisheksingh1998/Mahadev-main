import {createClient, type SanityClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'npcnh1bo'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = Boolean(projectId && projectId !== 'YOUR_PROJECT_ID')

export const client: SanityClient = createClient({
  projectId,
  dataset,
  useCdn:
    process.env.NEXT_PUBLIC_SANITY_USE_CDN !== 'false' &&
    process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const builder = createImageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export function imageUrl(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any,
  width?: number,
): string | null {
  if (!source) return null
  if (typeof source === 'string') return source
  try {
    const img = urlFor(source)
    return (width ? img.width(width) : img).url()
  } catch {
    return null
  }
}
