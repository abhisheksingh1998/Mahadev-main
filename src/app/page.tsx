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

export default async function HomePage() {
  const [home, posts] = await Promise.all([getHomePage(), getPosts()]);
  const featured =
    home.blogSection?.featuredPosts?.filter(Boolean) ||
    posts.slice(0, 3);

  return (
    <>
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
