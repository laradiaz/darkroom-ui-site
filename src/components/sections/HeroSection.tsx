"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function HeroSection() {
  const { copy } = useLocale();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <p className="num-label">{copy.hero.rail}</p>
        <div className="hero-main">
          <h1 className="brand-display" id="hero-title">
            {SITE.name}
          </h1>
          <p className="lede">
            {copy.hero.tagline}. {copy.hero.description}
          </p>
          <div className="cta-row">
            <a className="btn-outline" href="#get-started">
              {copy.hero.cta}
            </a>
            <a
              className="link-arrow"
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.hero.github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
