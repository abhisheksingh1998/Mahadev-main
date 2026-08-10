"use client";

import Link from "next/link";
import { useSiteSettings, useWhatsAppUrl } from "@/components/SiteSettingsProvider";

const socialIcon: Record<string, string> = {
  facebook: "fa-brands fa-facebook-f",
  instagram: "fa-brands fa-instagram",
  telegram: "fa-brands fa-telegram",
  twitter: "fa-brands fa-twitter",
};

export function Footer({ variant = "home" }: { variant?: "home" | "inner" }) {
  const settings = useSiteSettings();
  const whatsappUrl = useWhatsAppUrl();
  const href = (hash: string) => (variant === "home" ? hash : `/${hash}`);
  const footer = settings.footer;
  const socials = footer?.socialLinks?.length
    ? footer.socialLinks
    : [
        { platform: "facebook", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "telegram", url: "#" },
        { platform: "twitter", url: "#" },
      ];

  const quickLinks = footer?.quickLinks?.length
    ? footer.quickLinks
    : [
        { label: "Home", href: href("#home") },
        { label: "Live Matches", href: href("#live-matches") },
        { label: "Live Casino", href: href("#casino") },
        { label: "About Us", href: href("#about") },
        ...(variant === "home"
          ? [
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Promotions", href: "#bet-big" },
            ]
          : [{ label: "Blog & Guides", href: "/blog" }]),
      ];

  const supportLinks = footer?.supportLinks?.length
    ? footer.supportLinks
    : [
        { label: "FAQ", href: href("#faq") },
        ...(variant === "home" ? [{ label: "Blog Articles", href: "#blog" }] : []),
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        ...(variant === "inner"
          ? [{ label: "Responsible Gaming", href: "#" }]
          : []),
      ];

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <div className="logo-icon">
                <i className="fa-solid fa-crown" />
              </div>
              MAHADEV <span>BOOK</span>
            </Link>
            <p className="footer-desc">
              {footer?.description ||
                "India's most trusted online sports ID provider. Delivering security, transparency, and top-tier betting experiences 24/7."}
            </p>
            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={`${s.platform}-${s.url}`}
                  href={s.url || "#"}
                  className="social-icon"
                >
                  <i
                    className={
                      socialIcon[s.platform || ""] || "fa-brands fa-globe"
                    }
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">
              {variant === "home" ? "Support & Blog" : "Support & Policy"}
            </h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="fa-brands fa-whatsapp" /> Instant WhatsApp Customer
                Care
              </li>
              <li>
                <i className="fa-solid fa-envelope" />{" "}
                {footer?.email || "support@mahadevbook.com"}
              </li>
              <li>
                <i className="fa-solid fa-clock" /> 24/7 / 365 Days Service
              </li>
            </ul>
            <a
              href={whatsappUrl}
              className="btn btn-whatsapp"
              style={{ marginTop: "1rem", width: "100%" }}
            >
              <i className="fa-brands fa-whatsapp" />{" "}
              {variant === "home" ? "Chat Now" : "Chat On WhatsApp"}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {footer?.copyright ||
              "© 2026 Mahadev Book. All Rights Reserved. Demo UI Platform."}
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Responsible Gaming</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
