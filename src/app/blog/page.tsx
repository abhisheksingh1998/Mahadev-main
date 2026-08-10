import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/blog/BlogListing";
import { getPosts, getSiteSettings } from "@/lib/queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Blog & Sports News | ${settings.title?.split("|")[0]?.trim() || "Mahadev Book"}`,
    description:
      "Stay updated with the latest sports news, IPL betting guides, match predictions, and expert strategies on Mahadev Book Blog.",
  };
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
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
