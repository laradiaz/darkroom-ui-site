import { SITE } from "@/constants/site";

const INSTALL = `pnpm add darkroom-ui

import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import { Button, DarkroomUIProvider } from "darkroom-ui";`;

export function GetStartedSection() {
  return (
    <section className="section" id="get-started" aria-labelledby="install-title">
      <div className="section-grid">
        <p className="num-label">05 — Install</p>
        <div>
          <h2 id="install-title">Get started in minutes</h2>
          <p className="section-intro">
            Install the package, import styles once, wrap with the provider, and compose.
          </p>
          <div className="install-block">
            <pre>{INSTALL}</pre>
          </div>
          <div className="cta-row">
            <a
              className="btn-outline"
              href={SITE.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
            <a
              className="link-arrow"
              href={SITE.storybookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Storybook →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
