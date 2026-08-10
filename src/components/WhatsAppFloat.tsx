"use client";

import { useWhatsAppUrl, useSiteSettings } from "@/components/SiteSettingsProvider";

export function WhatsAppFloat() {
  const whatsappUrl = useWhatsAppUrl();
  const settings = useSiteSettings();
  const tooltip = settings.whatsappTooltip || "Get Instant ID On WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
      <span className="whatsapp-tooltip">{tooltip}</span>
    </a>
  );
}
