import articlesJson from "./articles.json";

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type ArticleTocItem = {
  id: string;
  label: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  breadcrumb: string;
  authorImg: string;
  featuredImage: string;
  excerpt: string;
  toc: ArticleTocItem[];
  sections: ArticleSection[];
};

export const articles = articlesJson as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}

export const blogListingMeta = {
  title: "Blog & Sports News | Mahadev Book",
  description:
    "Stay updated with the latest sports news, IPL betting guides, match predictions, and expert strategies on Mahadev Book Blog.",
};

export const BLOCKQUOTE = {
  text: "Live betting isn't about guessing who wins the match—it's about identifying momentary odds misprices created by crowd emotion and temporary overreactions.",
  cite: "Rohan Sharma, Senior Sports Analyst",
};

export const ARTICLE_TAGS = [
  "#IPL2026",
  "#CricketBetting",
  "#LiveOdds",
  "#BettingTips",
  "#MahadevBook",
];
