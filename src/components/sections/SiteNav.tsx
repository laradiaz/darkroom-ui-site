"use client";

import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";
import { GitHubIcon, MoonIcon, SunIcon } from "@/components/icons";
import { NAV_ITEMS, SITE } from "@/constants/site";

export function SiteNav() {
  const { toggle, darkModeEnabled } = useDarkroomDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const themeLabel = mounted
    ? darkModeEnabled
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle color theme";

  return (
    <header className="masthead">
      <a className="wordmark" href="#">
        {SITE.name}
      </a>
      <nav className="mast-nav" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
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
        <button type="button" className="icon-btn" onClick={toggle} aria-label={themeLabel}>
          {mounted && darkModeEnabled ? <SunIcon /> : <MoonIcon />}
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
