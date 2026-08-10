"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export function FAQ({
  title,
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
}) {
  const [active, setActive] = useState<number | null>(null);
  if (!items?.length) return null;

  return (
    <section id="faq">
      <div className="container">
        <div className="title-wrapper" data-aos="fade-up">
          <h2 className="section-title">
            {title || "Frequently Asked Questions"}
          </h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>

        <div className="faq-container" data-aos="fade-up">
          {items.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                className={`faq-item${isOpen ? " active" : ""}`}
                key={faq.question || index}
              >
                <div
                  className="faq-header"
                  onClick={() => setActive(isOpen ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActive(isOpen ? null : index);
                    }
                  }}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    <i className="fa-solid fa-chevron-down" />
                  </div>
                </div>
                <div className="faq-body">{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
