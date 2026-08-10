"use client";

import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";
import { imageUrl } from "@/lib/sanity";
import type { CasinoGame } from "@/lib/types";

export function Casino({
  title,
  subtitle,
  games,
}: {
  title?: string;
  subtitle?: string;
  games?: CasinoGame[];
}) {
  const whatsappUrl = useWhatsAppUrl();
  if (!games?.length) return null;

  return (
    <section className="casino-section" id="casino">
      <div className="container">
        <div className="title-wrapper" data-aos="fade-up">
          <h2 className="section-title">{title || "Live Casino & Arcade"}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>

        <div className="casino-grid">
          {games.map((game, index) => {
            const badgeClass =
              game.badgeStyle === "gold"
                ? "gold-badge"
                : game.badgeStyle === "cyan"
                  ? "cyan-badge"
                  : "";
            return (
              <a
                key={`${game.name}-${index}`}
                href={whatsappUrl}
                className="casino-card"
                data-aos="fade-up"
                data-aos-delay={String(100 + index * 50)}
              >
                <div className="casino-img-holder">
                  {game.badge ? (
                    <div className={`casino-badge${badgeClass ? ` ${badgeClass}` : ""}`}>
                      {game.badge}
                    </div>
                  ) : null}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(game.image) || "/images/7up-7down.jpg"}
                    alt={game.name || "Casino game"}
                  />
                </div>
                <div className="casino-footer">{game.provider || "KINGMAKER"}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
