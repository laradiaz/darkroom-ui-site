export type Locale = "en" | "es";

export const LOCALE_STORAGE_KEY = "darkroom-ui-locale";

export const COPY = {
  en: {
    nav: {
      features: "Features",
      theming: "Theming",
      install: "Install",
      components: "Components",
      primary: "Primary",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      themeToggle: "Toggle color theme",
      langAria: "Switch language",
    },
    hero: {
      rail: "01 — Library",
      tagline: "Monochrome editorial React components",
      description:
        "A warm paper and charcoal component library with CSS-variable light/dark theming, tree-shakeable exports, and an unstyled mode for your design system.",
      cta: "Get started",
      github: "View on GitHub →",
    },
    features: {
      rail: "02 — Features",
      title: "Built for editorial product sites",
      intro:
        "Everything you need to ship a polished marketing or content experience — without a rainbow of accent colors.",
      items: [
        {
          title: "Editorial components",
          description:
            "Typography, cards, hero, navigation, and layout primitives tuned for content-heavy sites.",
        },
        {
          title: "Light & dark",
          description:
            "One class on html toggles the whole palette via CSS variables — no duplicate theme objects.",
        },
        {
          title: "Tree-shakeable",
          description:
            "Import the full bundle or per-component subpaths like darkroom-ui/button and darkroom-ui/hero.",
        },
        {
          title: "Unstyled mode",
          description:
            "Skip CSS module classes and wire your own Tailwind or design tokens with slotProps.",
        },
        {
          title: "TypeScript",
          description:
            "First-class types for every component, variant, and provider config option.",
        },
        {
          title: "Storybook",
          description:
            "Interactive docs and examples for every component — open Components in the nav to explore.",
        },
      ],
    },
    theming: {
      rail: "03 — Tone",
      title: "Styled with CSS variables",
      introBefore: "Warm paper in light mode, charcoal in dark. Toggle below or use",
      introAfter: "in your app — same storage key as this site.",
      pane:
        "Paper and charcoal share one token surface. No second theme object — only values that flip when",
      paneAfter: "lands on",
      current: (mode: string, theme: string) => `Current: ${mode} (${theme})`,
      currentLoading: "Current theme loads from your preference",
      themeGroup: "Color theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    install: {
      rail: "04 — Install",
      title: "Get started in minutes",
      intro: "Install the package, import styles once, wrap with the provider, and compose.",
      storybook: "Storybook →",
    },
    footer: {
      resources: "Resources",
      components: "Components",
    },
  },
  es: {
    nav: {
      features: "Características",
      theming: "Temas",
      install: "Instalar",
      components: "Componentes",
      primary: "Principal",
      themeToLight: "Cambiar a modo claro",
      themeToDark: "Cambiar a modo oscuro",
      themeToggle: "Alternar tema",
      langAria: "Cambiar idioma",
    },
    hero: {
      rail: "01 — Lib",
      tagline: "Componentes React editoriales monocromáticos",
      description:
        "Una librería de componentes en papel cálido y carbón, con theming light/dark por variables CSS, exports tree-shakeable y modo unstyled para tu design system.",
      cta: "Empezar",
      github: "Ver en GitHub →",
    },
    features: {
      rail: "02 — Lista",
      title: "Hecha para sitios editoriales",
      intro:
        "Todo lo necesario para un marketing o contenido pulido — sin un arcoíris de colores de acento.",
      items: [
        {
          title: "Componentes editoriales",
          description:
            "Tipografía, cards, hero, navegación y layout pensados para sitios con mucho contenido.",
        },
        {
          title: "Claro y oscuro",
          description:
            "Una clase en html cambia toda la paleta vía variables CSS — sin objetos de tema duplicados.",
        },
        {
          title: "Tree-shakeable",
          description:
            "Importá el bundle completo o subpaths por componente como darkroom-ui/button y darkroom-ui/hero.",
        },
        {
          title: "Modo unstyled",
          description:
            "Omití las CSS modules y conectá tu propio Tailwind o design tokens con slotProps.",
        },
        {
          title: "TypeScript",
          description:
            "Tipos de primera clase para cada componente, variante y opción del provider.",
        },
        {
          title: "Storybook",
          description:
            "Docs e ejemplos interactivos de cada componente — abrí Componentes en el nav para explorar.",
        },
      ],
    },
    theming: {
      rail: "03 — Tono",
      title: "Estilos con variables CSS",
      introBefore: "Papel cálido en claro, carbón en oscuro. Alterná abajo o usá",
      introAfter: "en tu app — la misma clave de storage que este sitio.",
      pane:
        "Papel y carbón comparten una sola superficie de tokens. Sin un segundo tema — solo valores que cambian cuando",
      paneAfter: "cae en",
      current: (mode: string, theme: string) => `Actual: ${mode} (${theme})`,
      currentLoading: "El tema se carga desde tu preferencia",
      themeGroup: "Tema de color",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    install: {
      rail: "04 — Setup",
      title: "Empezá en minutos",
      intro: "Instalá el paquete, importá los estilos una vez, envolvé con el provider y componé.",
      storybook: "Storybook →",
    },
    footer: {
      resources: "Recursos",
      components: "Componentes",
    },
  },
} as const;

export type Copy = (typeof COPY)[Locale];
