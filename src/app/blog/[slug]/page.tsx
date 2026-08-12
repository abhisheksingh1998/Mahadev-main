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

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle || `${article.title} | Fairplay Blog`,
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

  return (
    <>
      <ReadingProgress />
      <Header variant="inner" active="blog" />
      <ArticleDetail article={article} related={related} popular={popular} />
      <Footer variant="inner" />
    </>
  );
}
