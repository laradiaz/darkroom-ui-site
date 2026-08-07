export type Locale = "en" | "es";

export const LOCALE_STORAGE_KEY = "darkroom-ui-locale";

export const COPY = {
  en: {
    nav: {
      catalog: "Components",
      primary: "Primary",
      themeToLight: "Light",
      themeToDark: "Dark",
      themeToggle: "Toggle theme",
      langAria: "Switch language",
    },
    hero: {
      kicker: "react component kit",
      titleA: "Ship",
      titleB: "clear interfaces.",
      body: "A monochrome React component library for content-heavy UIs. Paper and charcoal tokens, CSS-variable theming, tree-shakeable exports — no accent rainbow.",
      cta: "Get started",
      source: "Source code →",
    },
    features: {
      title: "What you get",
      tag: "01 — Features",
      items: [
        {
          num: "01",
          title: "Editorial components",
          desc: "Typography, cards, hero, and navigation tuned for content-heavy sites.",
          tag: "core",
        },
        {
          num: "02",
          title: "Light & dark",
          desc: "One class on html toggles the whole palette via CSS variables.",
          tag: "theming",
        },
        {
          num: "03",
          title: "Tree-shakeable",
          desc: "Import the full bundle or per-component subpaths.",
          tag: "bundle",
        },
        {
          num: "04",
          title: "Unstyled mode",
          desc: "Wire your own design tokens with slotProps.",
          tag: "headless",
        },
        {
          num: "05",
          title: "TypeScript",
          desc: "First-class types for every component and variant.",
          tag: "dx",
        },
        {
          num: "06",
          title: "Storybook",
          desc: "Interactive docs for every component in the package.",
          tag: "docs",
        },
      ],
    },
    reveal: {
      tag: "02 — Theming",
      titleA: "One token surface,",
      titleB: "light or dark.",
      body: "Toggle a class on html and the palette updates. No duplicate theme objects — just CSS variables that flip with mode.",
      points: [
        {
          title: "One class",
          desc: "Add or remove .dark on html. Paper and charcoal tokens flip together.",
        },
        {
          title: "Hook included",
          desc: "useDarkroomDarkMode() reads and writes the same preference this site uses.",
        },
        {
          title: "Override tokens",
          desc: "Restyle by setting --color-* variables in your CSS — components follow.",
        },
      ],
      light: "Light",
      dark: "Dark",
      previewLight: "html (light)",
      previewDark: "html.dark",
      miniKicker: "media card",
      miniHeading: "Compose the page.",
      miniBody:
        "Preview how MediaCard, Heading, and Button sit together on a warm paper surface.",
      miniCta: "Docs",
      mediaAlt: "Component media preview",
      openPreview: "Open live preview",
      previewCue: "Open live preview →",
      closePreview: "Close preview",
      modalTitle: "Live component preview",
      modalHint: "Toggle light/dark on this card only — the page theme stays put.",
    },
    install: {
      tag: "03 — Install",
      title: "Add it and start composing.",
      body: "Install the package, import styles once (or skip them in unstyled mode), wrap with the provider. Every component also ships as a tree-shakeable subpath export.",
      points: [
        {
          title: "Install",
          desc: "Add darkroom-ui with pnpm, npm, or yarn. Peer: React 16.8+.",
        },
        {
          title: "Styles once",
          desc: "Import style.css and fonts.css at the app entry — skip these if you run unstyled.",
        },
        {
          title: "Provider",
          desc: "Wrap with DarkroomUIProvider. Unstyled mode sets config.unstyled for the tree; pass unstyled={false} on a component to opt back into styles.",
        },
        {
          title: "Compose",
          desc: "Import from darkroom-ui or a subpath like darkroom-ui/button.",
        },
      ],
      npm: "npm →",
      storybook: "Storybook →",
      shellLabel: "terminal",
      shellTabsLabel: "Package manager",
      importLabel: "app entry",
      providerLabel: "provider",
      providerTabsLabel: "Provider mode",
      providerDefaultTab: "default",
      providerUnstyledTab: "unstyled",
      composeLabel: "compose",
      copy: "Click to copy",
      copied: "Copied",
    },
    footer: {
      line: "darkroom-ui — MIT © 2026",
    },
  },
  es: {
    nav: {
      catalog: "Components",
      primary: "Principal",
      themeToLight: "Claro",
      themeToDark: "Oscuro",
      themeToggle: "Alternar tema",
      langAria: "Cambiar idioma",
    },
    hero: {
      kicker: "kit de componentes react",
      titleA: "Interfaces",
      titleB: "claras, al grano.",
      body: "Una librería React monocroma para UIs con mucho contenido. Tokens papel y carbón, theming por variables CSS, exports tree-shakeable — sin arcoíris de acentos.",
      cta: "Empezar",
      source: "Código fuente →",
    },
    features: {
      title: "Qué incluye",
      tag: "01 — Features",
      items: [
        {
          num: "01",
          title: "Componentes editoriales",
          desc: "Tipografía, cards, hero y navegación pensados para sitios con mucho contenido.",
          tag: "core",
        },
        {
          num: "02",
          title: "Claro y oscuro",
          desc: "Una clase en html cambia toda la paleta vía variables CSS.",
          tag: "theming",
        },
        {
          num: "03",
          title: "Tree-shakeable",
          desc: "Importá el bundle completo o subpaths por componente.",
          tag: "bundle",
        },
        {
          num: "04",
          title: "Modo unstyled",
          desc: "Conectá tus propios design tokens con slotProps.",
          tag: "headless",
        },
        {
          num: "05",
          title: "TypeScript",
          desc: "Tipos de primera clase para cada componente y variante.",
          tag: "dx",
        },
        {
          num: "06",
          title: "Storybook",
          desc: "Docs interactivas de cada componente del paquete.",
          tag: "docs",
        },
      ],
    },
    reveal: {
      tag: "02 — Theming",
      titleA: "Una sola superficie",
      titleB: "de tokens.",
      body: "Una clase en html actualiza la paleta. Sin objetos de tema duplicados: solo variables CSS que cambian con el modo.",
      points: [
        {
          title: "Una clase",
          desc: "Agregá o quitá .dark en html. Los tokens de papel y carbón cambian juntos.",
        },
        {
          title: "Hook incluido",
          desc: "useDarkroomDarkMode() lee y escribe la misma preferencia que usa este sitio.",
        },
        {
          title: "Override de tokens",
          desc: "Reestilizá seteando variables --color-* en tu CSS — los componentes siguen.",
        },
      ],
      light: "Claro",
      dark: "Oscuro",
      previewLight: "html (claro)",
      previewDark: "html.dark",
      miniKicker: "media card",
      miniHeading: "Componé la página.",
      miniBody:
        "Así se ven MediaCard, Heading y Button juntos sobre una superficie de papel cálido.",
      miniCta: "Docs",
      mediaAlt: "Vista previa del componente",
      openPreview: "Abrir preview en vivo",
      previewCue: "Abrir preview en vivo →",
      closePreview: "Cerrar preview",
      modalTitle: "Preview de componentes",
      modalHint: "Alterná claro/oscuro solo en esta card — el tema de la página no cambia.",
    },
    install: {
      tag: "03 — Install",
      title: "Instalá y empezá a componer.",
      body: "Instalá el paquete, importá los estilos una vez (o saltealos en modo unstyled), envolvé con el provider. Cada componente también sale por subpath tree-shakeable.",
      points: [
        {
          title: "Instalá",
          desc: "Agregá darkroom-ui con pnpm, npm o yarn. Peer: React 16.8+.",
        },
        {
          title: "Estilos una vez",
          desc: "Importá style.css y fonts.css en la entrada de la app — saltealos si corrés unstyled.",
        },
        {
          title: "Provider",
          desc: "Envolvé con DarkroomUIProvider. El modo unstyled setea config.unstyled en el árbol; pasá unstyled={false} en un componente para volver a los estilos.",
        },
        {
          title: "Componé",
          desc: "Importá desde darkroom-ui o un subpath como darkroom-ui/button.",
        },
      ],
      npm: "npm →",
      storybook: "Storybook →",
      shellLabel: "terminal",
      shellTabsLabel: "Gestor de paquetes",
      importLabel: "entrada de la app",
      providerLabel: "provider",
      providerTabsLabel: "Modo del provider",
      providerDefaultTab: "default",
      providerUnstyledTab: "unstyled",
      composeLabel: "compose",
      copy: "Clic para copiar",
      copied: "Copiado",
    },
    footer: {
      line: "darkroom-ui — MIT © 2026",
    },
  },
} as const;

export type Copy = (typeof COPY)[Locale];
