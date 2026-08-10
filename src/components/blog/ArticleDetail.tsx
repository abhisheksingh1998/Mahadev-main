"use client";

import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";
import { imageUrl } from "@/lib/sanity";
import { formatPostDate } from "@/lib/fallbacks";
import type { PostCard, PostDetail } from "@/lib/types";

const portableComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const id = `section-${value._key || "h2"}`;
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => <h3>{children}</h3>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="custom-blockquote">
        <i className="fa-solid fa-quote-left quote-icon" />
        <p>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

function ArticleSidebar() {
  const whatsappUrl = useWhatsAppUrl();

  return (
    <aside className="article-sidebar">
      <div className="sidebar-widget glass-card" data-aos="fade-up">
        <h4 className="widget-title">Search Blog</h4>
        <div className="sidebar-search">
          <input type="text" placeholder="Search articles..." />
          <button type="button" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>

      <div className="sidebar-widget cta-widget glass-card" data-aos="fade-up">
        <div className="cta-badge">
          <i className="fa-solid fa-shield-halved" /> INSTANT SETUP
        </div>
        <h3>Get Your Verified Sports ID in 2 Minutes</h3>
        <p>
          Join India&apos;s #1 trusted sports platform with 24/7 instant
          withdrawals and best market odds.
        </p>
        <a
          href={whatsappUrl}
          className="btn btn-whatsapp"
          style={{ width: "100%" }}
        >
          <i className="fa-brands fa-whatsapp" /> Get ID on WhatsApp
        </a>
      </div>

      <div className="sidebar-widget glass-card" data-aos="fade-up">
        <h4 className="widget-title">Popular Articles</h4>
        <div className="popular-posts-list">
          <a href="#" className="popular-post-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=150&q=80"
              alt="Betting ID Security"
            />
            <div>
              <span className="post-date">
                <i className="fa-solid fa-calendar-days" /> Aug 2, 2026
              </span>
              <h5 className="post-heading">
                How to Verify Your Online Betting ID Safely
              </h5>
            </div>
          </a>
          <a href="#" className="popular-post-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1606168094336-48f205276929?auto=format&fit=crop&w=150&q=80"
              alt="Live Casino Roulette"
            />
            <div>
              <span className="post-date">
                <i className="fa-solid fa-calendar-days" /> Jul 26, 2026
              </span>
              <h5 className="post-heading">
                Mastering Live Roulette & Dragon Tiger
              </h5>
            </div>
          </a>
          <a href="#" className="popular-post-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80"
              alt="UPI Instant Payouts"
            />
            <div>
              <span className="post-date">
                <i className="fa-solid fa-calendar-days" /> Jul 18, 2026
              </span>
              <h5 className="post-heading">
                Instant Withdrawal Guarantees & Payouts
              </h5>
            </div>
          </a>
        </div>
      </div>

      <div className="sidebar-widget glass-card" data-aos="fade-up">
        <h4 className="widget-title">Categories</h4>
        <ul className="sidebar-categories">
          <li>
            <Link href="/blog">
              <span>Cricket Guides</span> <span className="cat-count">14</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span>Live Casino Tips</span> <span className="cat-count">8</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span>Security & Safety</span>{" "}
              <span className="cat-count">6</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span>Sports News & Updates</span>{" "}
              <span className="cat-count">11</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export function ArticleDetail({
  article,
  related,
}: {
  article: PostDetail;
  related: PostCard[];
}) {
  const sections = article.sections || [];
  const toc =
    sections.length > 0
      ? sections.map((section, index) => ({
          id: `section-${index + 1}`,
          label: section.heading || `Section ${index + 1}`,
        }))
      : [];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const authorImg =
    imageUrl(article.authorImage, 150) ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

  return (
    <>
      <section className="article-hero">
        <div className="article-hero-overlay" />
        <div className="container article-hero-content" data-aos="fade-up">
          <nav className="breadcrumb">
            <Link href="/">
              <i className="fa-solid fa-house" /> Home
            </Link>
            <i className="fa-solid fa-chevron-right separator" />
            <Link href="/blog">Blog</Link>
            <i className="fa-solid fa-chevron-right separator" />
            <span>{article.breadcrumb || "Cricket Guides"}</span>
          </nav>
          <span className="category-badge">
            <i className="fa-solid fa-baseball-bat-ball" />{" "}
            {article.categoryTitle || "Betting Guides"}
          </span>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta-bar">
            <div className="meta-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={authorImg} alt="Author" className="author-img" />
              <div>
                <span className="meta-label">Written by</span>
                <span className="meta-value">
                  {article.authorName || "Mahadev Book"}
                </span>
              </div>
            </div>
            <div className="meta-item">
              <i className="fa-solid fa-calendar-days meta-icon" />
              <div>
                <span className="meta-label">Published</span>
                <span className="meta-value">
                  {formatPostDate(article.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-container-section">
        <div className="container article-layout">
          <main className="article-main-content">
            <div className="featured-banner-wrapper" data-aos="fade-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(article.mainImage) || "/images/logo.png"}
                alt={article.title}
              />
            </div>

            <div className="share-sticky-bar">
              <span className="share-title">SHARE</span>
              <a href="#" className="share-btn fb" aria-label="Share on Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="share-btn tw" aria-label="Share on Twitter">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#" className="share-btn wa" aria-label="Share on WhatsApp">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="#" className="share-btn tg" aria-label="Share on Telegram">
                <i className="fa-brands fa-telegram" />
              </a>
            </div>

            {toc.length > 0 ? (
              <div className="toc-box glass-card">
                <div className="toc-header">
                  <i className="fa-solid fa-list" />
                  <h3>Table of Contents</h3>
                </div>
                <ul className="toc-list">
                  {toc.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(`#${item.id}`);
                        }}
                      >
                        {index + 1}. {item.label.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="article-body-text">
              {article.body && Array.isArray(article.body) && article.body.length > 0 ? (
                <PortableText value={article.body} components={portableComponents} />
              ) : (
                sections.map((section, index) => (
                  <div key={section.heading || index}>
                    <h2 id={`section-${index + 1}`}>
                      {section.heading || `Section ${index + 1}`}
                    </h2>
                    {(section.paragraphs || []).map((p, i) => (
                      <p key={`${index}-${i}`}>{p}</p>
                    ))}
                    {index === 0 && article.blockquote?.text ? (
                      <blockquote className="custom-blockquote">
                        <i className="fa-solid fa-quote-left quote-icon" />
                        <p>&quot;{article.blockquote.text}&quot;</p>
                        {article.blockquote.cite ? (
                          <cite>— {article.blockquote.cite}</cite>
                        ) : null}
                      </blockquote>
                    ) : null}
                  </div>
                ))
              )}
            </div>

            {(article.tags || []).length > 0 ? (
              <div className="article-tags-wrapper">
                <span className="tags-title">
                  <i className="fa-solid fa-tags" /> Tags:
                </span>
                <div className="tags-list">
                  {article.tags!.map((tag) => (
                    <a href="#" className="tag-item" key={tag}>
                      {tag.startsWith("#") ? tag : `#${tag}`}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </main>

          <ArticleSidebar />
        </div>
      </section>

      <section className="related-articles-section">
        <div className="container">
          <div className="title-wrapper" data-aos="fade-up">
            <h2 className="section-title">Related Articles</h2>
            <p className="section-subtitle">
              Continue reading top sports strategies and guide updates.
            </p>
          </div>
          <div className="blog-grid">
            {related.map((post) => (
              <article className="blog-item-card" key={post._id || post.slug}>
                <div className="card-img-holder">
                  <span className="card-category-tag">
                    {post.categoryTitle || "Betting Guides"}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(post.mainImage) || "/images/logo.png"}
                    alt={post.title}
                  />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span>
                      <i className="fa-solid fa-calendar-days" />{" "}
                      {formatPostDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <div className="card-footer">
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      <i className="fa-solid fa-user" />{" "}
                      {post.authorName || "Mahadev Book"}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="read-more-link">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
