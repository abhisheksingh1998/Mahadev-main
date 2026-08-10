"use client";

import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";

const LIVE_GAMES = [
  {
    title: "Teen Patti",
    image: "/images/teen-patti.png",
  },
  {
    title: "Casino",
    image: "/images/casino.png",
  },
  {
    title: "Cricket",
    image: "/images/cricket.png",
  },
] as const;

export function LiveMatches({
  subtitle,
}: {
  title?: string;
  subtitle?: string;
  categories?: unknown;
}) {
  const whatsappUrl = useWhatsAppUrl();

  return (
    <section className="sports-matches-section" id="live-matches">
      <div className="container">
        <div className="title-wrapper" data-aos="fade-up">
          <h2 className="section-title">Live Games</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>

        <div className="matches-image-grid" data-aos="fade-up">
          {LIVE_GAMES.map((game) => (
            <a
              key={game.title}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="match-image-card"
              aria-label={game.title}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={game.image}
                alt={game.title}
                className="match-card-image"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
