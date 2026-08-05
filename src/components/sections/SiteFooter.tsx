import { NAV_ITEMS, SITE } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="colophon">
      <div className="colophon-row">
        <span className="colophon-brand">{SITE.name}</span>
        <span>MIT License</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="colophon-row">
        <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
          npm
        </a>
        <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
          Storybook
        </a>
        {NAV_ITEMS.filter((item) => item.href.startsWith("#")).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
