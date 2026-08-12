import type {HomePage, PostDetail, SiteSettings} from './types'
import articlesJson from '@/data/articles.json'
import {WHATSAPP_URL} from '@/data/site'

export const fallbackSiteSettings: SiteSettings = {
  title: 'Mahadev Book | Premium Online Sports Betting ID Provider',
  description:
    'Experience secure, transparent, and immersive online sports betting with Mahadev Book. Get instant IDs, competitive odds, and 24/7 WhatsApp support.',
  whatsappUrl: WHATSAPP_URL,
  whatsappTooltip: 'Get Instant ID On WhatsApp',
  headerNav: [
    {label: 'Live Matches', href: '/#live-matches'},
    {label: 'Live Casino', href: '/#casino'},
    {label: 'About Us', href: '/#about'},
    {label: 'Why Consider Us', href: '/#why-us'},
    {label: 'Blog', href: '/blog'},
    {label: 'Support', href: '/#faq'},
  ],
  footer: {
    description:
      "India's most trusted online sports ID provider. Delivering security, transparency, and top-tier betting experiences 24/7.",
    email: undefined,
    copyright: '© 2026 Mahadev Book. All Rights Reserved.',
  },
}

export const fallbackHomePage: HomePage = {
  heroSlides: [
    {
      subtitle: "India's #1 Trusted Betting ID Provider",
      title: 'Experience Premium',
      titleHighlight: 'Online Sports Betting',
      description:
        'Get your verified online betting ID instantly. Unmatched odds, 24/7 instant withdrawals, and live match coverage.',
      primaryCtaLabel: 'Register Now',
      primaryCtaIcon: 'fa-user-plus',
      secondaryCtaLabel: 'Get ID on WhatsApp',
      image: '/images/home-banner-1.jpg' as unknown as HomePage['heroSlides'] extends (infer S)[] | undefined
        ? S extends {image?: infer I}
          ? I
          : never
        : never,
    },
  ],
  matchesSection: {
    title: 'Live Games',
    subtitle: 'Real-time match events with live odds and instant betting options.',
    categories: [
      {
        name: 'Cricket',
        icon: 'fa-baseball-bat-ball',
        matches: [
          {
            teams: 'R C Bengaluru v Kolkata Knight Riders',
            league: 'Indian Premier League',
            time: '08/05/2026 11:20 am',
            status: 'LIVE',
          },
          {
            teams: 'Hobart Hurricanes vs Perth Scorchers',
            league: 'Big Bash League 2025 - 26',
            time: '08/05/2026 11:20 am',
            status: 'LIVE',
          },
        ],
      },
      {
        name: 'Football',
        icon: 'fa-football',
        matches: [
          {
            teams: 'FC Barcelona SRL vs. BSC Young Boys Srl',
            league: '(UEFA Champions League SRL)',
            time: '05/08/2026 11:20 am',
            status: 'LIVE',
          },
          {
            teams: 'Bahir Dar FC v Hadiah Hosanna FC',
            league: '(Ethiopian Premier League)',
            time: '05/08/2026 11:20 am',
            status: 'LIVE',
          },
        ],
      },
      {
        name: 'Tennis',
        icon: 'fa-baseball',
        matches: [
          {
            teams: 'G Diallo v Trungelliti',
            league: '(ATP Shanghai 2025-26)',
            time: '05/08/2026 11:20 am',
            status: 'LIVE',
          },
          {
            teams: 'ATP Beijing 2025-26',
            league: '(ATP Beijing 2025-26)',
            time: '05/08/2026 11:20 am',
            status: 'LIVE',
          },
        ],
      },
    ],
  },
  casinoSection: {
    title: 'Live Casino & Arcade',
    subtitle:
      'Play popular live table games, slots, and interactive casino titles with instant rewards.',
    games: [
      {name: '7Up 7Down', provider: '7Up 7Down', badge: 'BONUS', image: '/images/7up-7down.jpg' as never},
      {name: 'Dragon Tiger', provider: 'MAC88', badge: '2X BONUS', image: '/images/dragon-tiger.jpg' as never},
      {name: 'Roulette', provider: 'Roulette', badge: 'BONUS', image: '/images/roulette.jpg' as never},
      {name: 'Teenpatti', provider: 'Teen Patti', image: '/images/teenpatti.jpg' as never},
      {name: 'Rummy', provider: 'Rummy', badge: '1000X', badgeStyle: 'gold', image: '/images/rummy.jpg' as never},
      {name: 'Mega Fishing', provider: 'EZUGI', badge: '+ NEW', badgeStyle: 'cyan', image: '/images/mega-fishing.jpg' as never},
      {name: 'Poker', provider: 'Poker', badge: '1000X', badgeStyle: 'gold', image: '/images/poker.jpg' as never},
      {name: 'Coin Toss', provider: 'SPRIBE', badge: 'BONUS', image: '/images/coin-toss.jpg' as never},
    ],
  },
  aboutSection: {
    title: 'Mahadev Book | Online Sports Betting ID Provider',
    eyebrow: 'Transparency • Security • Excitement',
    paragraphs: [
      'At Mahadev Book, our passion for cricket drives everything we do. Backed by a team of enthusiasts deeply entrenched in the world of cricket, we have only one aim: to provide a secure, transparent, and immersive cricket betting experience for every user. We envision a platform that celebrates sport while offering an exceptional betting experience to fellow fans.',
      "With a focus on user experience and safety, we've curated a platform that's not just about betting but fostering a community of responsible cricket betting enthusiasts.",
    ],
    ctaLabel: 'Get Your Instant Demo ID Now',
  },
  featuresSection: {
    title: 'Why Consider Mahadev Book?',
    subtitle:
      'We offer unmatched features tailored for high-stakes sports enthusiasts and casual bettors alike.',
    features: [
      {
        title: 'Live & Pre-Match Betting',
        description:
          'Indulge in the excitement of betting in real-time as the game unfolds, enjoying a dynamic and immersive live betting experience.\n\nFor those who like to strategize before the event, we offer pre-match betting options, allowing you to make informed decisions ahead of the game.',
        image: '/images/live-&-pre-match-betting.jpg' as never,
      },
      {
        title: 'Secure Transactions',
        description:
          'Deposit and withdraw funds with confidence using our secure payment methods.\n\nOur user-friendly platform ensures a seamless betting experience. Navigate effortlessly through matches, odds, and statistics to make informed betting decisions.',
        image: '/images/secure-transactions.jpg' as never,
      },
      {
        title: 'Competitive Odds',
        description:
          "From exciting T20 tournaments to prestigious Test series, we cover cricket events from around the world.\n\nWhether it's the IPL, BBL, or ICC Cricket World Cup, enjoy competitive odds on your favorite matches.",
        image: '/images/competitive-odds.jpg' as never,
      },
      {
        title: '24/7 Live Coverage',
        description:
          'Indulge in the excitement of betting in real-time while matches are in progress.\n\nYou can also place strategic bets before the match begins, making every game even more exciting.',
        image: '/images/24-7-live-coverage.jpg' as never,
      },
    ],
  },
  betBigSection: {
    eyebrow: 'Maximize Your Wins',
    title: 'Bet Big -',
    titleHighlight: 'Win Bigger',
    description:
      'Step into the premier arena of online gaming. With Mahadev Book, get access to higher betting limits, instant market settlements, and exclusive VIP support for large accounts. Elevate your sports viewing into an exhilarating winning experience today!',
    ctaLabel: 'Connect on WhatsApp Now',
    image: '/images/win-big.jpg' as never,
  },
  blogSection: {
    title: 'Latest Updates & Blog',
    subtitle: 'Stay informed with expert match insights, betting strategies, and news.',
  },
  faqSection: {
    title: 'Frequently Asked Questions',
    subtitle: 'Got questions? We have got all the answers you need to get started.',
    items: [
      {
        question: 'What is Mahadev Book?',
        answer:
          "Mahadev Book is India's leading online sports betting ID provider, offering transparent, secure, and instant access to top gaming platforms with competitive odds and 24/7 service.",
      },
      {
        question: 'How do I register?',
        answer:
          'Registration is seamless! Simply click on the "Register" button or message our team directly on WhatsApp to receive your instant login credentials.',
      },
      {
        question: 'How can I get my betting ID?',
        answer:
          'Contact our 24/7 official support line on WhatsApp, choose your deposit amount, and your online betting ID will be generated and delivered within minutes.',
      },
      {
        question: 'How can I contact customer support?',
        answer:
          'Our support team is available 24 hours a day, 7 days a week via WhatsApp, live chat, or email to assist you with inquiries, deposits, and fast withdrawals.',
      },
      {
        question: 'Is WhatsApp support available?',
        answer:
          'Yes, our main support operating channel is WhatsApp, ensuring direct, fast, and personalized real-time assistance whenever you need it.',
      },
      {
        question: 'What sports are available?',
        answer:
          'We offer extensive coverage for Cricket (IPL, World Cups, Tests, T20s), Football, Tennis, Basketball, Horse Racing, and popular live casino games.',
      },
      {
        question: 'How do I start betting?',
        answer:
          'Once you receive your ID and initial funds are credited, log in to the dashboard, select your favorite match, view the live odds, and place your strategic bets!',
      },
    ],
  },
}

// Fix hero slides properly without complex types
fallbackHomePage.heroSlides = [
  {
    image: '/images/home-banner-1.jpg' as never,
    subtitle: "India's #1 Trusted Betting ID Provider",
    title: 'Experience Premium',
    titleHighlight: 'Online Sports Betting',
    description:
      'Get your verified online betting ID instantly. Unmatched odds, 24/7 instant withdrawals, and live match coverage.',
    primaryCtaLabel: 'Register Now',
    primaryCtaIcon: 'fa-user-plus',
    secondaryCtaLabel: 'Get ID on WhatsApp',
  },
  {
    image: '/images/home-banner-3.jpg' as never,
    subtitle: 'Ultimate Cricket Experience',
    title: 'Live Match',
    titleHighlight: 'Action & Fast Odds',
    description:
      'Bet live on IPL, World Cup, and International Cricket matches with highest market margins and zero delay.',
    primaryCtaLabel: 'Start Betting',
    primaryCtaIcon: 'fa-play',
    secondaryCtaLabel: 'WhatsApp Support',
  },
  {
    image: '/images/home-banner-4.jpg' as never,
    subtitle: 'Instant Payout Guarantee',
    title: '100% Secure',
    titleHighlight: '& Lightning Fast',
    description:
      'Deposits & Withdrawals processed within 2 minutes. Transparent, reliable, and trusted by millions.',
    primaryCtaLabel: 'Claim Your ID',
    primaryCtaIcon: 'fa-shield-halved',
    secondaryCtaLabel: 'Contact Us',
  },
  {
    image: '/images/home-banner-2.jpg' as never,
    subtitle: '24/7 Dedicated Support',
    title: 'Win Big With',
    titleHighlight: 'Mahadev Book',
    description:
      "Join India's largest gaming network. Superior platform tech with guaranteed privacy and round-the-clock service.",
    primaryCtaLabel: 'Register Today',
    primaryCtaIcon: 'fa-trophy',
    secondaryCtaLabel: 'Instant Setup',
  },
]

function formatDate(dateStr: string) {
  // Already human readable in fallback articles
  return dateStr
}

export const fallbackPosts: PostDetail[] = (
  articlesJson as {
    slug: string
    title: string
    date: string
    category: string
    breadcrumb: string
    authorImg: string
    featuredImage: string
    excerpt: string
    sections: {heading: string; paragraphs: string[]}[]
  }[]
).map((article, index) => ({
  _id: `fallback-${article.slug}`,
  title: article.title,
  slug: article.slug,
  excerpt:
    article.excerpt ||
    article.sections?.[0]?.paragraphs?.[0]?.slice(0, 180) ||
    '',
  publishedAt: article.date,
  mainImage: article.featuredImage as never,
  categoryTitle: article.category,
  breadcrumb: article.breadcrumb,
  authorName: 'Mahadev Book',
  authorImage: article.authorImg as never,
  featured: index === 1,
  sections: article.sections,
  blockquote: {
    text: "Live betting isn't about guessing who wins the match—it's about identifying momentary odds misprices created by crowd emotion and temporary overreactions.",
    cite: 'Rohan Sharma, Senior Sports Analyst',
  },
  tags: ['#IPL2026', '#CricketBetting', '#LiveOdds', '#BettingTips', '#MahadevBook'],
}))

export function formatPostDate(value?: string) {
  if (!value) return ''
  // Fallback already formatted, Sanity dates are ISO
  if (/^\d{4}-/.test(value)) {
    return new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return formatDate(value)
}
