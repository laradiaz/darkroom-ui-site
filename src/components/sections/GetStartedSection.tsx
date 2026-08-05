"use client";

import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

const INSTALL = `pnpm add darkroom-ui

import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import { Button, DarkroomUIProvider } from "darkroom-ui";`;

export function GetStartedSection() {
  const { copy } = useLocale();

  return (
    <section className="section" id="get-started" aria-labelledby="install-title">
      <div className="section-grid">
        <p className="num-label">{copy.install.rail}</p>
        <div>
          <h2 id="install-title">{copy.install.title}</h2>
          <p className="section-intro">{copy.install.intro}</p>
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
              {copy.install.storybook}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
