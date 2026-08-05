"use client";

import { useEffect, useState } from "react";
import { useDarkroomDarkMode } from "darkroom-ui";
import { useLocale } from "@/components/LocaleProvider";

export function ThemingSection() {
  const { theme, setTheme, isDark } = useDarkroomDarkMode();
  const { copy } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="section" id="theming" aria-labelledby="theming-title">
      <div className="section-grid">
        <p className="num-label">{copy.theming.rail}</p>
        <div>
          <h2 id="theming-title">{copy.theming.title}</h2>
          <p className="section-intro">
            {copy.theming.introBefore}{" "}
            <code className="inline">useDarkroomDarkMode()</code> {copy.theming.introAfter}
          </p>
          <div className="theme-split">
            <div className="theme-pane">
              <p className="section-intro" style={{ margin: 0 }}>
                {copy.theming.pane} <code className="inline">.dark</code>{" "}
                {copy.theming.paneAfter} <code className="inline">html</code>.
              </p>
            </div>
            <div className="theme-pane demo">
              <p className="theme-status">
                {mounted
                  ? copy.theming.current(isDark ? "dark" : "light", theme)
                  : copy.theming.currentLoading}
              </p>
              <div className="theme-toggles" role="group" aria-label={copy.theming.themeGroup}>
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "light"}
                  onClick={() => setTheme("light")}
                >
                  {copy.theming.light}
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "dark"}
                  onClick={() => setTheme("dark")}
                >
                  {copy.theming.dark}
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  aria-pressed={mounted && theme === "system"}
                  onClick={() => setTheme("system")}
                >
                  {copy.theming.system}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
