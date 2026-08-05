import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

export function SiteFooter() {
  const { copy } = useLocale();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>{copy.footer.line}</span>
        <div className="site-footer-links">
          <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
            {copy.nav.catalog}
          </a>
          <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}
