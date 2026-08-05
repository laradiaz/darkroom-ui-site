import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";
import { goToSection, stripHashAndScroll } from "@/scroll";

export function SiteNav() {
  const { toggle, isDark } = useDarkroomDarkMode();
  const { copy, locale, setLocale } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => stripHashAndScroll(), []);

  const themeLabel = mounted
    ? isDark
      ? copy.nav.themeToLight
      : copy.nav.themeToDark
    : copy.nav.themeToggle;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label={copy.nav.primary}>
        <div className="nav-brand">
          <a
            className="wordmark"
            href="/"
            aria-label={SITE.name}
            onClick={(e) => goToSection(e, "top")}
          >
            <img src="/android-chrome-192x192.png" alt="" width={36} height={36} />
          </a>
          <span className="edition-label">{copy.edition}</span>
        </div>
        <div className="nav-links">
          <a href="/" onClick={(e) => goToSection(e, "features")}>
            {copy.nav.index}
          </a>
          <a href="/" onClick={(e) => goToSection(e, "theming")}>
            {copy.nav.reveal}
          </a>
          <a href="/" onClick={(e) => goToSection(e, "install")}>
            {copy.nav.negative}
          </a>
          <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
            {copy.nav.catalog}
          </a>
          <div className="lang-pair" role="group" aria-label={copy.nav.langAria}>
            <button
              type="button"
              className={locale === "en" ? "is-active" : undefined}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={locale === "es" ? "is-active" : undefined}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
          </div>
          <button type="button" className="mode-btn" onClick={toggle} aria-label={themeLabel}>
            {themeLabel}
          </button>
        </div>
      </nav>
    </header>
  );
}
