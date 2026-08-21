import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { LiveMatches } from "@/components/home/LiveMatches";
import { Casino } from "@/components/home/Casino";
import { About } from "@/components/home/About";
import { WhyUs } from "@/components/home/WhyUs";
import { BetBig } from "@/components/home/BetBig";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQ } from "@/components/home/FAQ";
import { getHomePage, getPosts } from "@/lib/queries";

export const revalidate = 60;

const HOME_TITLE =
  "Mahadev Book – Online Sports Betting & Cricket ID Provider in India";
const HOME_DESCRIPTION =
  "Mahadev Book offers premium online sports betting and cricket betting IDs in India with live match odds, fast secure payouts, and 24/7 support. Bet big, win bigger.";
const HOME_URL = "https://mahadevbook.page/";
const HOME_IMAGE = "https://mahadevbook.page/og-image.jpg";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOME_URL,
    siteName: "Mahadev Book",
    images: [
      {
        url: HOME_IMAGE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mahadev Book",
  url: HOME_URL,
  logo: "https://mahadevbook.page/logo.png",
  sameAs: [
    "https://t.me/your-channel",
    "https://www.instagram.com/your-profile",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mahadev Book",
  url: HOME_URL,
};

export default async function HomePage() {
  const [home, posts] = await Promise.all([getHomePage(), getPosts()]);
  const featured =
    home.blogSection?.featuredPosts?.filter(Boolean) ||
    posts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <Header variant="home" />
      <Hero slides={home.heroSlides || []} />
      <LiveMatches
        title={home.matchesSection?.title}
        subtitle={home.matchesSection?.subtitle}
        categories={home.matchesSection?.categories}
      />
      <Casino
        title={home.casinoSection?.title}
        subtitle={home.casinoSection?.subtitle}
        games={home.casinoSection?.games}
      />
      <About
        title={home.aboutSection?.title}
        eyebrow={home.aboutSection?.eyebrow}
        paragraphs={home.aboutSection?.paragraphs}
        ctaLabel={home.aboutSection?.ctaLabel}
      />
      <WhyUs
        title={home.featuresSection?.title}
        subtitle={home.featuresSection?.subtitle}
        features={home.featuresSection?.features}
      />
      <BetBig section={home.betBigSection} />
      <BlogPreview
        title={home.blogSection?.title}
        subtitle={home.blogSection?.subtitle}
        posts={featured}
      />
      <FAQ
        title={home.faqSection?.title}
        subtitle={home.faqSection?.subtitle}
        items={home.faqSection?.items}
      />
      <Footer variant="home" />
    </>
  );
}
