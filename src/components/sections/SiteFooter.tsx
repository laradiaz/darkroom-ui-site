"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer className="colophon">
      <p className="colophon-brand">{SITE.name}</p>
      <p className="colophon-meta">MIT · © {new Date().getFullYear()}</p>
      <nav className="colophon-links" aria-label={copy.footer.resources}>
        <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
          npm
        </a>
        <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
          {copy.footer.components}
        </a>
      </nav>
    </footer>
  );
}
