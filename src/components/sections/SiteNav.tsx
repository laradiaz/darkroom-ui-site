"use client";

import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";
import { GitHubIcon, MoonIcon, SunIcon } from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function SiteNav() {
  const { toggle, isDark } = useDarkroomDarkMode();
  const { copy, locale, toggleLocale } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const themeLabel = mounted
    ? isDark
      ? copy.nav.themeToLight
      : copy.nav.themeToDark
    : copy.nav.themeToggle;

  const navItems = [
    { label: copy.nav.features, href: "#features" },
    { label: copy.nav.theming, href: "#theming" },
    { label: copy.nav.install, href: "#get-started" },
    { label: copy.nav.components, href: SITE.storybookUrl },
  ];

  return (
    <header className="masthead">
      <a className="wordmark" href="#">
        <img
          className="wordmark-mark"
          src="/android-chrome-192x192.png"
          alt=""
          width={28}
          height={28}
        />
        {SITE.name}
      </a>
      <nav className="mast-nav" aria-label={copy.nav.primary}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="lang-btn"
          onClick={toggleLocale}
          aria-label={copy.nav.langAria}
        >
          <span className={locale === "en" ? "is-active" : undefined}>EN</span>
          <span aria-hidden="true">/</span>
          <span className={locale === "es" ? "is-active" : undefined}>ES</span>
        </button>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={themeLabel}>
          {mounted && isDark ? <SunIcon /> : <MoonIcon />}
        </button>
        <a
          className="icon-btn"
          href={SITE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      </nav>
    </header>
  );
}
