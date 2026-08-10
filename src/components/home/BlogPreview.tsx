import Link from "next/link";
import { imageUrl } from "@/lib/sanity";
import type { PostCard } from "@/lib/types";

export function BlogPreview({
  title,
  subtitle,
  posts,
}: {
  title?: string;
  subtitle?: string;
  posts: PostCard[];
}) {
  return (
    <section id="blog" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="container">
        <div className="title-wrapper" data-aos="fade-up">
          <h2 className="section-title">{title || "Latest Updates & Blog"}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>

        <div className="blog-grid">
          {posts.slice(0, 3).map((post, index) => (
            <article
              className="glass-card blog-card"
              data-aos="flip-up"
              data-aos-delay={String((index + 1) * 100)}
              key={post._id || post.slug}
            >
              <div className="blog-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(post.mainImage) || "/images/logo.png"}
                  alt={post.title}
                />
              </div>
              <div className="blog-content">
                <span className="blog-tag">
                  {post.categoryTitle || "Betting Guides"}
                </span>
                <h3 className="blog-title">{post.title}</h3>
                <Link href={`/blog/${post.slug}`} className="blog-link">
                  Read Article <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-btn">
          <Link href="/blog" className="more-blog-btn">
            More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
