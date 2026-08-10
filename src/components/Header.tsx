"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSiteSettings, useWhatsAppUrl } from "@/components/SiteSettingsProvider";
import { imageUrl } from "@/lib/sanity";
import { navLinksHome, navLinksInner } from "@/data/site";

type HeaderProps = {
  variant?: "home" | "inner";
  active?: "blog" | null;
};

export function Header({ variant = "home", active = null }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const settings = useSiteSettings();
  const whatsappUrl = useWhatsAppUrl();

  const cmsNav = settings.headerNav?.filter(Boolean);
  const links =
    cmsNav && cmsNav.length > 0
      ? cmsNav
      : variant === "home"
        ? navLinksHome
        : navLinksInner;

  const logoSrc = imageUrl(settings.logo, 200) || "/images/logo.png";
  const logoAlt =
    (typeof settings.logo === "object" && settings.logo?.alt) || "Logo";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoAlt} />
          </Link>
        </div>

        <div
          className="hamburger"
          id="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          role="button"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
        </div>

        <nav className={`nav-menu${menuOpen ? " active" : ""}`} id="nav-menu">
          <ul className="nav-links">
            {links.map((link) => {
              const isBlog = link.href === "/blog" || link.href.includes("blog");
              const className =
                isBlog && active === "blog" ? "nav-link active" : "nav-link";
              return (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className={className} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="header-actions">
            <a href={whatsappUrl} className="btn btn-outline">
              Login
            </a>
            <a href={whatsappUrl} className="btn btn-gold">
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
