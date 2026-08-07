import { useCallback, useId, useState, type ReactNode } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";
import { SITE } from "@/constants/site";

const IMPORT_TEXT = `import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";`;

const PROVIDER_DEFAULT_TEXT = `import { DarkroomUIProvider } from "darkroom-ui";

export function App({ children }) {
  return <DarkroomUIProvider>{children}</DarkroomUIProvider>;
}`;

const PROVIDER_UNSTYLED_TEXT = `import { DarkroomUIProvider } from "darkroom-ui";

export function App({ children }) {
  return (
    <DarkroomUIProvider config={{ unstyled: true }}>
      {children}
    </DarkroomUIProvider>
  );
}`;

const COMPOSE_TEXT = `import { Button, Heading } from "darkroom-ui";
// or tree-shakeable subpaths:
import { Button } from "darkroom-ui/button";
import { Heading } from "darkroom-ui/heading";`;

type CodeTab = {
  id: string;
  label: string;
  text: string;
  snippet: ReactNode;
};

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
    } catch {
      return;
    }
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

function TabbedCopyCard({
  tabs,
  copyHint,
  copiedHint,
  tablistLabel,
}: {
  tabs: CodeTab[];
  copyHint: string;
  copiedHint: string;
  tablistLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const baseId = useId();
  const tab = tabs[active] ?? tabs[0];

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(tab.text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      return;
    }
  }, [tab.text]);

  return (
    <div className="code-card code-card-tabs">
      <div className="code-card-bar">
        <div className="code-tabs" role="tablist" aria-label={tablistLabel}>
          {tabs.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              className={index === active ? "is-active" : undefined}
              aria-selected={index === active}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => {
                setActive(index);
                setCopied(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="code-card-action"
          onClick={onCopy}
          aria-label={copied ? `${copiedHint}: ${tab.label}` : `${copyHint}: ${tab.label}`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${tab.id}`}
        aria-labelledby={`${baseId}-tab-${tab.id}`}
      >
        <pre className="code-block">
          <code>{tab.snippet}</code>
        </pre>
      </div>
    </div>
  );
}

function ShellSnippet({ cmd, pkg }: { cmd: string; pkg: string }) {
  return (
    <>
      <span className="tok-fn">{cmd}</span>
      <span className="tok-plain"> </span>
      <span className="tok-plain">{pkg}</span>
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
    </>
  );
}

function ProviderDefaultSnippet() {
  return (
    <>
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui&quot;</span>
      <span className="tok-punc">;</span>
      {"\n\n"}
      <span className="tok-kw">export</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">function</span>
      <span className="tok-plain"> </span>
      <span className="tok-fn">App</span>
      <span className="tok-punc">(</span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> children </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-punc">)</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      {"\n"}
      <span className="tok-plain">  </span>
      <span className="tok-kw">return</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">&lt;</span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-punc">&gt;</span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain">children</span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-punc">&lt;/</span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-punc">&gt;</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-punc">{"}"}</span>
    </>
  );
}

function ProviderUnstyledSnippet() {
  return (
    <>
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui&quot;</span>
      <span className="tok-punc">;</span>
      {"\n\n"}
      <span className="tok-kw">export</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">function</span>
      <span className="tok-plain"> </span>
      <span className="tok-fn">App</span>
      <span className="tok-punc">(</span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> children </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-punc">)</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      {"\n"}
      <span className="tok-plain">  </span>
      <span className="tok-kw">return</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">(</span>
      {"\n"}
      <span className="tok-plain">    </span>
      <span className="tok-punc">&lt;</span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-plain"> </span>
      <span className="tok-plain">config</span>
      <span className="tok-punc">=</span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-plain">unstyled</span>
      <span className="tok-punc">:</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">true</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-punc">&gt;</span>
      {"\n"}
      <span className="tok-plain">      </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain">children</span>
      <span className="tok-punc">{"}"}</span>
      {"\n"}
      <span className="tok-plain">    </span>
      <span className="tok-punc">&lt;/</span>
      <span className="tok-type">DarkroomUIProvider</span>
      <span className="tok-punc">&gt;</span>
      {"\n"}
      <span className="tok-plain">  </span>
      <span className="tok-punc">)</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-punc">{"}"}</span>
    </>
  );
}

function ComposeSnippet() {
  return (
    <>
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">Button</span>
      <span className="tok-punc">,</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">Heading</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui&quot;</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-plain">{"// or tree-shakeable subpaths:"}</span>
      {"\n"}
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">Button</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui/button&quot;</span>
      <span className="tok-punc">;</span>
      {"\n"}
      <span className="tok-kw">import</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"{"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-type">Heading</span>
      <span className="tok-plain"> </span>
      <span className="tok-punc">{"}"}</span>
      <span className="tok-plain"> </span>
      <span className="tok-kw">from</span>
      <span className="tok-plain"> </span>
      <span className="tok-str">&quot;darkroom-ui/heading&quot;</span>
      <span className="tok-punc">;</span>
    </>
  );
}

export function GetStartedSection() {
  const { copy } = useLocale();
  const { install } = copy;

  const shellTabs: CodeTab[] = [
    {
      id: "pnpm",
      label: "pnpm",
      text: "pnpm add darkroom-ui",
      snippet: <ShellSnippet cmd="pnpm" pkg="add" />,
    },
    {
      id: "npm",
      label: "npm",
      text: "npm install darkroom-ui",
      snippet: <ShellSnippet cmd="npm" pkg="install" />,
    },
    {
      id: "yarn",
      label: "yarn",
      text: "yarn add darkroom-ui",
      snippet: <ShellSnippet cmd="yarn" pkg="add" />,
    },
  ];

  const providerTabs: CodeTab[] = [
    {
      id: "default",
      label: install.providerDefaultTab,
      text: PROVIDER_DEFAULT_TEXT,
      snippet: <ProviderDefaultSnippet />,
    },
    {
      id: "unstyled",
      label: install.providerUnstyledTab,
      text: PROVIDER_UNSTYLED_TEXT,
      snippet: <ProviderUnstyledSnippet />,
    },
  ];

  return (
    <section className="install" id="install" aria-labelledby="install-title">
      <div className="install-head">
        <span className="label">{install.tag}</span>
        <h2 id="install-title">{install.title}</h2>
        <p>{install.body}</p>
      </div>

      <ol className="install-steps">
        <li className="install-step">
          <strong>{install.points[0].title}</strong>
          <span className="install-step-desc">{install.points[0].desc}</span>
          <TabbedCopyCard
            tabs={shellTabs}
            copyHint={install.copy}
            copiedHint={install.copied}
            tablistLabel={install.shellTabsLabel}
          />
        </li>
        <li className="install-step">
          <strong>{install.points[1].title}</strong>
          <span className="install-step-desc">{install.points[1].desc}</span>
          <CopyCard
            label={install.importLabel}
            text={IMPORT_TEXT}
            copyHint={install.copy}
            copiedHint={install.copied}
          >
            <ImportSnippet />
          </CopyCard>
        </li>
        <li className="install-step">
          <strong>{install.points[2].title}</strong>
          <span className="install-step-desc">{install.points[2].desc}</span>
          <TabbedCopyCard
            tabs={providerTabs}
            copyHint={install.copy}
            copiedHint={install.copied}
            tablistLabel={install.providerTabsLabel}
          />
        </li>
        <li className="install-step">
          <strong>{install.points[3].title}</strong>
          <span className="install-step-desc">{install.points[3].desc}</span>
          <CopyCard
            label={install.composeLabel}
            text={COMPOSE_TEXT}
            copyHint={install.copy}
            copiedHint={install.copied}
          >
            <ComposeSnippet />
          </CopyCard>
        </li>
      </ol>

      <div className="link-row">
        <a href={SITE.npmUrl} target="_blank" rel="noopener noreferrer">
          {install.npm}
        </a>
        <a href={SITE.storybookUrl} target="_blank" rel="noopener noreferrer">
          {install.storybook}
        </a>
      </div>
    </section>
  );
}
