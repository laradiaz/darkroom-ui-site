import { useEffect, useId, useRef, useState } from "react";
import { Button, Heading, Label, Text, useDarkroomDarkMode } from "darkroom-ui";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

function PreviewSurface({
  brand,
  kicker,
  heading,
  body,
  cta,
  mediaAlt,
  foot,
  dark,
}: {
  brand: string;
  kicker: string;
  heading: string;
  body: string;
  cta: string;
  mediaAlt: string;
  foot: string;
  dark: boolean;
}) {
  return (
    <div
      className={`mini-card preview-surface ${dark ? "preview-theme-dark" : "preview-theme-light"}`}
    >
      <div className="mini-card-bar">
        <strong>{brand}</strong>
      </div>
      <div className="mini-card-body">
        <img className="mini-media" src="/landing-example.jpg" alt={mediaAlt} />
        <div className="mini-copy">
          <Label>{kicker}</Label>
          <Heading level={3}>{heading}</Heading>
          <Text size="caption">{body}</Text>
          <div className="preview-actions">
            <Button variant="primary" size="sm">
              {cta}
            </Button>
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <div className="mini-card-foot">{foot}</div>
    </div>
  );
}

export function ThemingSection() {
  const { setTheme, darkModeEnabled } = useDarkroomDarkMode();
  const { copy } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [previewDark, setPreviewDark] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const pageFoot = mounted && darkModeEnabled ? copy.reveal.previewDark : copy.reveal.previewLight;
  const previewFoot = previewDark ? copy.reveal.previewDark : copy.reveal.previewLight;

  const openModal = () => {
    setPreviewDark(darkModeEnabled);
    setOpen(true);
  };

  return (
    <section className="reveal" id="theming" aria-labelledby="reveal-title">
      <div className="reveal-inner">
        <div className="reveal-copy">
          <span className="label">{copy.reveal.tag}</span>
          <h2 id="reveal-title">
            {copy.reveal.titleA}
            <br />
            {copy.reveal.titleB}
          </h2>
          <p>{copy.reveal.body}</p>
          <ol className="detail-list reveal-points">
            {copy.reveal.points.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.desc}</span>
              </li>
            ))}
          </ol>
          <div className="theme-btns" role="group" aria-label={copy.nav.themeToggle}>
            <button
              type="button"
              className={`btn-ghost${mounted && !darkModeEnabled ? " is-active" : ""}`}
              aria-pressed={mounted && !darkModeEnabled}
              onClick={() => setTheme("light")}
            >
              {copy.reveal.light}
            </button>
            <button
              type="button"
              className={`btn-ghost${mounted && darkModeEnabled ? " is-active" : ""}`}
              aria-pressed={mounted && darkModeEnabled}
              onClick={() => setTheme("dark")}
            >
              {copy.reveal.dark}
            </button>
          </div>
        </div>

        <div className="preview-trigger">
          <button
            ref={triggerRef}
            type="button"
            className="mini-card mini-card-trigger"
            onClick={openModal}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label={copy.reveal.openPreview}
          >
            <div className="mini-card-bar">
              <strong>{SITE.name}</strong>
            </div>
            <div className="mini-card-body">
              <img className="mini-media" src="/landing-example.jpg" alt="" />
              <div className="mini-copy">
                <span className="kicker">{copy.reveal.miniKicker}</span>
                <span className="heading">{copy.reveal.miniHeading}</span>
                <span className="body">{copy.reveal.miniBody}</span>
                <span className="mini-cta">{copy.reveal.miniCta}</span>
              </div>
            </div>
            <div className="mini-card-foot">
              <span>{pageFoot}</span>
              <span className="preview-cue">{copy.reveal.previewCue}</span>
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="preview-modal-root"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="preview-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header className="preview-modal-head">
              <div>
                <h3 id={titleId}>{copy.reveal.modalTitle}</h3>
                <p>{copy.reveal.modalHint}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="preview-modal-close"
                onClick={() => setOpen(false)}
                aria-label={copy.reveal.closePreview}
              >
                ×
              </button>
            </header>

            <div
              className="theme-btns preview-modal-themes"
              role="group"
              aria-label={copy.nav.themeToggle}
            >
              <button
                type="button"
                className={`btn-ghost${!previewDark ? " is-active" : ""}`}
                aria-pressed={!previewDark}
                onClick={() => setPreviewDark(false)}
              >
                {copy.reveal.light}
              </button>
              <button
                type="button"
                className={`btn-ghost${previewDark ? " is-active" : ""}`}
                aria-pressed={previewDark}
                onClick={() => setPreviewDark(true)}
              >
                {copy.reveal.dark}
              </button>
            </div>

            <PreviewSurface
              brand={SITE.name}
              kicker={copy.reveal.miniKicker}
              heading={copy.reveal.miniHeading}
              body={copy.reveal.miniBody}
              cta={copy.reveal.miniCta}
              mediaAlt={copy.reveal.mediaAlt}
              foot={previewFoot}
              dark={previewDark}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
