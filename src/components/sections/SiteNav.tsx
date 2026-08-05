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

  const navItems = [
    { label: copy.nav.index, href: "#features" },
    { label: copy.nav.reveal, href: "#theming" },
    { label: copy.nav.negative, href: "#install" },
    { label: copy.nav.catalog, href: SITE.storybookUrl, external: true },
  ];

  return (
    <>
      <div className="edition-bar">
        <span>{copy.edition}</span>
        <div className="edition-controls">
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
      </div>

      <nav className="site-nav" aria-label={copy.nav.primary}>
        <a className="wordmark" href="#top" aria-label={SITE.name}>
          <img src="/android-chrome-192x192.png" alt="" width={36} height={36} />
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
