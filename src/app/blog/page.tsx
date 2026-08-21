import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/blog/BlogListing";
import { getPosts } from "@/lib/queries";

export const revalidate = 60;

const BLOG_TITLE = "Blog & Sports News | Mahadev Book";
const BLOG_DESCRIPTION =
  "Stay updated with the latest sports news, IPL betting guides, match predictions, and expert strategies on Mahadev Book Blog.";
const BLOG_URL = "https://mahadevbook.page/blog";
const BLOG_IMAGE = "https://mahadevbook.page/og-image.jpg";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    type: "website",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: BLOG_URL,
    siteName: "Mahadev Book",
    images: [
      {
        url: BLOG_IMAGE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [BLOG_IMAGE],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Mahadev Book Blog & Guides",
  url: BLOG_URL,
  publisher: {
    "@type": "Organization",
    name: "Mahadev Book",
    logo: {
      "@type": "ImageObject",
      url: "https://mahadevbook.page/logo.png",
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mahadevbook.page/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: BLOG_URL,
    },
  ],
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Header variant="inner" active="blog" />
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="container blog-hero-content" data-aos="fade-up">
          <span className="hero-subtitle">
            <i className="fa-solid fa-newspaper" /> Official Insights & News
          </span>
          <h1 className="hero-title">
            Mahadev Book <span>Blog & Guides</span>
          </h1>
          <p className="hero-desc">
            Explore expert strategies, IPL match analyses, online sports betting
            security tips, and exclusive updates to boost your winning odds.
          </p>
        </div>
      </section>
      <BlogListing articles={posts} />
      <Footer variant="inner" />
    </>
  );
}
