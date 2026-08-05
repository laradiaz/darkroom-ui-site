import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function SiteNav() {
  const { toggle, isDark } = useDarkroomDarkMode();
  const { copy, locale, setLocale } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const themeLabel = mounted
    ? isDark
      ? copy.nav.themeToLight
      : copy.nav.themeToDark
    : copy.nav.themeToggle;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label={copy.nav.primary}>
        <a className="edition-label" href="#top">
          {SITE.name}
        </a>
        <div className="nav-links">
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
