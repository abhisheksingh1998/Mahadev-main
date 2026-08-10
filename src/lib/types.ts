export type SanityImage =
  | string
  | {
      asset?: {_ref?: string; _type?: string; url?: string}
      alt?: string
    }
  | null

export type NavItem = {
  label: string
  href: string
}

export type SiteSettings = {
  title?: string
  description?: string
  whatsappUrl?: string
  whatsappTooltip?: string
  logo?: SanityImage
  headerNav?: NavItem[]
  footer?: {
    description?: string
    email?: string
    copyright?: string
    quickLinks?: NavItem[]
    supportLinks?: NavItem[]
    socialLinks?: {platform?: string; url?: string}[]
  }
}

export type HeroSlide = {
  image?: SanityImage
  subtitle?: string
  title?: string
  titleHighlight?: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaIcon?: string
  secondaryCtaLabel?: string
}

export type Match = {
  teams?: string;
  league?: string;
  time?: string;
  status?: string;
  image?: string;
  title?: string;
}

export type MatchCategory = {
  name: string;
  icon?: string;
  matches?: Match[];
}

export type CasinoGame = {
  image?: SanityImage
  name?: string
  provider?: string
  badge?: string
  badgeStyle?: 'default' | 'gold' | 'cyan'
}

export type FeatureItem = {
  image?: SanityImage
  title?: string
  description?: string
}

export type FaqItem = {
  question?: string
  answer?: string
}

export type HomePage = {
  heroSlides?: HeroSlide[]
  matchesSection?: {
    title?: string
    subtitle?: string
    categories?: MatchCategory[]
  }
  casinoSection?: {
    title?: string
    subtitle?: string
    games?: CasinoGame[]
  }
  aboutSection?: {
    title?: string
    eyebrow?: string
    paragraphs?: string[]
    ctaLabel?: string
  }
  featuresSection?: {
    title?: string
    subtitle?: string
    features?: FeatureItem[]
  }
  betBigSection?: {
    image?: SanityImage
    eyebrow?: string
    title?: string
    titleHighlight?: string
    description?: string
    ctaLabel?: string
  }
  blogSection?: {
    title?: string
    subtitle?: string
    featuredPosts?: PostCard[]
  }
  faqSection?: {
    title?: string
    subtitle?: string
    items?: FaqItem[]
  }
}

export type PostSection = {
  heading?: string
  paragraphs?: string[]
}

export type PostCard = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  mainImage?: SanityImage
  categoryTitle?: string
  featured?: boolean
  authorName?: string
}

export type PostDetail = PostCard & {
  breadcrumb?: string
  authorImage?: SanityImage
  sections?: PostSection[]
  body?: unknown[]
  blockquote?: {text?: string; cite?: string}
  tags?: string[]
  seoTitle?: string
  seoDescription?: string
}
