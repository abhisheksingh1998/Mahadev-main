"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { imageUrl } from "@/lib/sanity";
import { formatPostDate } from "@/lib/fallbacks";
import type { PostCard } from "@/lib/types";

const CARDS_PER_PAGE = 9;

export function BlogListing({ articles }: { articles: PostCard[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(articles.length / CARDS_PER_PAGE));

  const visible = useMemo(() => {
    const start = (page - 1) * CARDS_PER_PAGE;
    return articles.slice(start, start + CARDS_PER_PAGE);
  }, [articles, page]);

  const scrollToTop = () => {
    const section = document.querySelector(".blog-section");
    if (section) {
      window.scrollTo({
        top: (section as HTMLElement).offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  const goTo = (next: number) => {
    setPage(next);
    scrollToTop();
  };

  const featured =
    articles.find((a) => a.featured) ||
    articles[0];

  return (
    <section className="blog-section">
      <div className="container">
        {featured ? (
          <div className="featured-post-card glass-card" data-aos="fade-up">
            <div className="featured-img-box">
              <span className="featured-badge">
                <i className="fa-solid fa-fire" /> FEATURED POST
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(featured.mainImage) || "/images/logo.png"}
                alt={featured.title}
              />
            </div>
            <div className="featured-content">
              <div className="meta-row">
                <span className="meta-category">
                  <i className="fa-solid fa-tag" />{" "}
                  {featured.categoryTitle || "Betting Guides"}
                </span>
                <span className="meta-date">
                  <i className="fa-solid fa-calendar-days" />{" "}
                  {formatPostDate(featured.publishedAt)}
                </span>
              </div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              <div className="featured-footer">
                <div className="author-info">
                  <div className="author-avatar">
                    <i className="fa-solid fa-user-shield" />
                  </div>
                  <div>
                    <span className="author-name">
                      {featured.authorName || "Mahadev Book"}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="btn btn-gold btn-read"
                >
                  <i className="fa-solid fa-book-open" /> Read Article
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="blog-grid" id="staticBlogGrid">
          {visible.map((article) => (
            <article className="blog-item-card" key={article._id || article.slug}>
              <div className="card-img-holder">
                <span className="card-category-tag">
                  {article.categoryTitle || "Betting Guides"}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(article.mainImage) || "/images/logo.png"}
                  alt={article.title}
                />
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span>
                    <i className="fa-solid fa-calendar-days" />{" "}
                    {formatPostDate(article.publishedAt)}
                  </span>
                </div>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-desc">{article.excerpt}</p>
                <div className="card-footer">
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    <i className="fa-solid fa-user" />{" "}
                    {article.authorName || "Mahadev Book"}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="read-more-link"
                  >
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 ? (
          <div
            className="pagination-wrapper"
            id="paginationWrapper"
            data-aos="fade-up"
          >
            <button
              className="page-btn"
              disabled={page === 1}
              onClick={() => goTo(page - 1)}
            >
              <i className="fa-solid fa-chevron-left" /> Previous
            </button>

            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={`num-btn${n === page ? " active" : ""}`}
                  onClick={() => goTo(n)}
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              className="page-btn"
              disabled={page === totalPages}
              onClick={() => goTo(page + 1)}
            >
              Next <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
