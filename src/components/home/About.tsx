"use client";

import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";

export function About({
  title,
  eyebrow,
  paragraphs,
  ctaLabel,
}: {
  title?: string;
  eyebrow?: string;
  paragraphs?: string[];
  ctaLabel?: string;
}) {
  const whatsappUrl = useWhatsAppUrl();

  return (
    <section id="about">
      <div className="container">
        <div className="glass-card about-content" data-aos="zoom-in">
          <h2 className="section-title">
            {title || "Mahadev Book | Online Sports Betting ID Provider"}
          </h2>
          {eyebrow ? (
            <div className="title-wrapper">
              <span
                style={{
                  color: "var(--accent-gold)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {eyebrow}
              </span>
            </div>
          ) : null}
          {(paragraphs || []).map((p, i) => (
            <p
              className="about-text"
              key={i}
              style={
                i === (paragraphs?.length || 0) - 1
                  ? { marginBottom: "2.5rem" }
                  : undefined
              }
            >
              {p}
            </p>
          ))}
          <a
            href={whatsappUrl}
            className="btn btn-whatsapp"
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
          >
            <i className="fa-brands fa-whatsapp" />{" "}
            {ctaLabel || "Get Your Instant Demo ID Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
