import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function HeroSection() {
  const { copy } = useLocale();

  return (
    <header className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div>
          <div className="hero-kicker">
            <span className="version-chip">{SITE.version}</span>
            <span className="kicker-label">{copy.hero.kicker}</span>
          </div>
          <h1 id="hero-title">
            {copy.hero.titleA}
            <br />
            {copy.hero.titleB}
          </h1>
        </div>
        <div className="hero-aside">
          <p>{copy.hero.body}</p>
          <div className="cta-row">
            <a className="btn-primary" href="#install">
              {copy.hero.cta}
            </a>
            <a
              className="btn-ghost"
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.hero.source}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
