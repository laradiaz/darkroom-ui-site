"use client";

import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";

export function ThemingSection() {
  const { theme, setTheme, isDark } = useDarkroomDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="section" id="theming" aria-labelledby="theming-title">
      <div className="section-grid">
        <p className="num-label">03 — Tone</p>
        <div>
          <h2 id="theming-title">Styled with CSS variables</h2>
          <p className="section-intro">
            Warm paper in light mode, charcoal in dark. Toggle below or use{" "}
            <code className="inline">useDarkroomDarkMode()</code> in your app — same storage key as
            this site.
          </p>
          <div className="theme-split">
            <div className="theme-pane">
              <p className="section-intro" style={{ margin: 0 }}>
                Paper and charcoal share one token surface. No second theme object — only values
                that flip when <code className="inline">.dark</code> lands on{" "}
                <code className="inline">html</code>.
              </p>
            </div>
            <div className="theme-pane demo">
              <p className="theme-status">
                {mounted
                  ? `Current: ${isDark ? "dark" : "light"} (${theme})`
                  : "Current theme loads from your preference"}
              </p>
              <div className="theme-toggles" role="group" aria-label="Color theme">
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "light"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "dark"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "system"}
                  onClick={() => setTheme("system")}
                >
                  System
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
