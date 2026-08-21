import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleDetail } from "@/components/blog/ArticleDetail";
import {
  getPostBySlug,
  getPostSlugs,
  getPosts,
  getRelatedPosts,
} from "@/lib/queries";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ARTICLE_SEO: Record<
  string,
  {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    jsonLd: Record<string, unknown>;
  }
> = {
  "mahadev-book-explore-an-exciting-online-casino-experience": {
    title: "Mahadev Book: Explore an Exciting Online Casino Experience",
    description:
      "Discover Mahadev Book's online casino — live dealer tables, slots, and top casino games with fast deposits, secure play, and round-the-clock support in India.",
    canonical:
      "https://mahadevbook.page/blog/mahadev-book-explore-an-exciting-online-casino-experience",
    ogImage: "https://mahadevbook.page/og-image.jpg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://mahadevbook.page/blog/mahadev-book-explore-an-exciting-online-casino-experience",
      },
      headline: "Mahadev Book: Explore an Exciting Online Casino Experience",
      description:
        "Discover Mahadev Book's online casino — live dealer tables, slots, and top casino games with fast deposits, secure play, and round-the-clock support in India.",
      image: "https://mahadevbook.page/blog-image.jpg",
      author: { "@type": "Organization", name: "Mahadev Book" },
      publisher: {
        "@type": "Organization",
        name: "Mahadev Book",
        logo: {
          "@type": "ImageObject",
          url: "https://mahadevbook.page/logo.png",
        },
      },
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
    },
  },
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = ARTICLE_SEO[slug];

  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: seo.canonical,
      },
      openGraph: {
        type: "article",
        title: seo.title,
        description: seo.description,
        url: seo.canonical,
        siteName: "Mahadev Book",
        images: [{ url: seo.ogImage }],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: [seo.ogImage],
      },
    };
  }

  const article = await getPostBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle || `${article.title} | Mahadev Book Blog`,
    description: article.seoDescription || article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) notFound();

  const [related, allPosts] = await Promise.all([
    getRelatedPosts(slug),
    getPosts(),
  ]);
  const popular = allPosts.filter((post) => post.slug !== slug).slice(0, 5);
  const seo = ARTICLE_SEO[slug];

  return (
    <>
      {seo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.jsonLd),
          }}
        />
      ) : null}
      <ReadingProgress />
      <Header variant="inner" active="blog" />
      <ArticleDetail article={article} related={related} popular={popular} />
      <Footer variant="inner" />
    </>
  );
}
