import { SITE } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="colophon">
      <p className="colophon-brand">{SITE.name}</p>
      <p className="colophon-meta">
        MIT · © {new Date().getFullYear()}
      </p>
      <nav className="colophon-links" aria-label="Resources">
        <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
          npm
        </a>
        <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
          Storybook
        </a>
      </nav>
    </footer>
  );
}
