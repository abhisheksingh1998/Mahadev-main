"use client";

import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";
import { imageUrl } from "@/lib/sanity";
import type { HomePage } from "@/lib/types";

export function BetBig({
  section,
}: {
  section?: HomePage["betBigSection"];
}) {
  const whatsappUrl = useWhatsAppUrl();
  if (!section) return null;

  return (
    <section id="bet-big">
      <div className="container">
        <div className="bet-big-container">
          <div className="bet-big-img-box" data-aos="fade-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl(section.image) || "/images/win-big.jpg"}
              alt="Bet Big Win Bigger"
            />
          </div>

          <div className="bet-big-content" data-aos="fade-left">
            {section.eyebrow ? (
              <span
                style={{
                  color: "var(--accent-gold)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {section.eyebrow}
              </span>
            ) : null}
            <h2 className="bet-big-title">
              {section.title} <br />
              {section.titleHighlight ? (
                <span style={{ color: "var(--accent-gold)" }}>
                  {section.titleHighlight}
                </span>
              ) : null}
            </h2>
            {section.description ? (
              <p className="bet-big-desc">{section.description}</p>
            ) : null}
            <a
              href={whatsappUrl}
              className="btn btn-whatsapp"
              style={{ fontSize: "1.1rem", padding: "1rem 2.2rem" }}
            >
              <i className="fa-brands fa-whatsapp" />{" "}
              {section.ctaLabel || "Connect on WhatsApp Now"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
