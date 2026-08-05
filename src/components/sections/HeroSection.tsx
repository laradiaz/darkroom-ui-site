import { SITE } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <p className="num-label">01 — Library</p>
        <div className="hero-main">
          <h1 className="brand-display" id="hero-title">
            {SITE.name}
          </h1>
          <p className="lede">
            {SITE.tagline}. {SITE.description}
          </p>
          <div className="cta-row">
            <a className="btn-outline" href="#get-started">
              Get started
            </a>
            <a
              className="link-arrow"
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
