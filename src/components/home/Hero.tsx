"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useWhatsAppUrl } from "@/components/SiteSettingsProvider";
import { imageUrl } from "@/lib/sanity";
import type { HeroSlide } from "@/lib/types";

export function Hero({ slides }: { slides: HeroSlide[] }) {
  const whatsappUrl = useWhatsAppUrl();

  return (
    <section className="hero" id="home">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => {
          const bg = imageUrl(slide.image) || "/images/home-banner-1.jpg";
          return (
            <SwiperSlide
              key={`${slide.title}-${index}`}
              style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="hero-overlay" />
              <div className="hero-content" data-aos="fade-up">
                {slide.subtitle ? (
                  <span className="hero-subtitle">{slide.subtitle}</span>
                ) : null}
                <h1 className="hero-title">
                  {slide.title}
                  {slide.titleHighlight ? (
                    <>
                      {" "}
                      <span>{slide.titleHighlight}</span>
                    </>
                  ) : null}
                </h1>
                {slide.description ? (
                  <p className="hero-desc">{slide.description}</p>
                ) : null}
                <div className="hero-cta">
                  <a href={whatsappUrl} className="btn btn-gold">
                    <i
                      className={`fa-solid ${slide.primaryCtaIcon || "fa-user-plus"}`}
                    />{" "}
                    {slide.primaryCtaLabel || "Register Now"}
                  </a>
                  <a href={whatsappUrl} className="btn btn-whatsapp">
                    <i className="fa-brands fa-whatsapp" />{" "}
                    {slide.secondaryCtaLabel || "Get ID on WhatsApp"}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
