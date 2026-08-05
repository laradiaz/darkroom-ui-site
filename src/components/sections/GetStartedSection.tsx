import { useCallback, useState, type ReactNode } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

const SHELL_TEXT = "pnpm add darkroom-ui";

const IMPORT_TEXT = `import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import { Button, DarkroomUIProvider } from "darkroom-ui";`;

function CopyCard({
  label,
  text,
  copyHint,
  copiedHint,
  children,
}: {
  label: string;
  text: string;
  copyHint: string;
  copiedHint: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {}
  }, [text]);

  return (
    <button
      type="button"
      className="code-card"
      onClick={onCopy}
      aria-label={copied ? `${copiedHint}: ${label}` : `${copyHint}: ${label}`}
    >
      <span className="code-card-bar">
        <span>{label}</span>
        <span className="code-card-action" aria-hidden="true">
          {copied ? <CheckIcon /> : <CopyIcon />}
        </span>
      </span>
      <pre className="code-block">
        <code>{children}</code>
      </pre>
    </button>
  );
}

function ShellSnippet() {
  return (
    <>
      <span className="tok-fn">pnpm</span>
      <span className="tok-plain"> </span>
      <span className="tok-plain">add</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">darkroom-ui</span>
    </>
  );
}

function ImportSnippet() {
  return (
    <>
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui/style.css&quot;</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui/fonts.css&quot;</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">Button</span>
      <span className="tok-punc">,</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui&quot;</span>
      <span className="tok-punc">;</span>
    </>
  );
}

export function GetStartedSection() {
  const { copy } = useLocale();

  return (
    <section className="install" id="install" aria-labelledby="install-title">
      <div className="install-grid">
        <div className="install-main">
          <span className="label">{copy.install.tag}</span>
          <h2 id="install-title">{copy.install.title}</h2>
          <div className="code-stack">
            <CopyCard
              label={copy.install.shellLabel}
              text={SHELL_TEXT}
              copyHint={copy.install.copy}
              copiedHint={copy.install.copied}
            >
              <ShellSnippet />
            </CopyCard>
            <CopyCard
              label={copy.install.importLabel}
              text={IMPORT_TEXT}
              copyHint={copy.install.copy}
              copiedHint={copy.install.copied}
            >
              <ImportSnippet />
            </CopyCard>
          </div>
        </div>
        <div className="install-side">
          <p>{copy.install.body}</p>
          <div className="link-row">
            <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
              {copy.install.npm}
            </a>
            <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
              {copy.install.storybook}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
