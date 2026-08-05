export const SITE = {
  name: "darkroom-ui",
  tagline: "Monochrome editorial React components",
  description:
    "A warm paper and charcoal component library with CSS-variable light/dark theming, tree-shakeable exports, and an unstyled mode for your design system.",
  githubUrl: "https://github.com/laradiaz/darkroom-ui",
  npmUrl: "https://www.npmjs.com/package/darkroom-ui",
  storybookUrl: "https://storybook.darkroom-ui.dev",
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Components", href: "#components" },
  { label: "Theming", href: "#theming" },
  { label: "Install", href: "#get-started" },
  { label: "Docs", href: SITE.storybookUrl },
] as const;

export const FEATURES = [
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
    description: "First-class types for every component, variant, and provider config option.",
  },
  {
    title: "Storybook",
    description:
      "Interactive docs and examples for every component — the source of truth while the site grows.",
  },
] as const;

export const COMPONENT_LIST = [
  "Heading",
  "Text",
  "Label",
  "Button",
  "Badge",
  "RecipeCard",
  "MediaCard",
  "Divider",
  "ContentGrid",
  "NavBar",
  "Hero",
  "NewsletterSignup",
  "SocialLink",
  "Figure",
  "Footer",
  "Page",
  "Container",
  "Section",
] as const;
