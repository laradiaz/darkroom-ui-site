# darkroom-ui-site

Marketing site for [darkroom-ui](https://www.npmjs.com/package/darkroom-ui) — live at [darkroom-ui.dev](https://darkroom-ui.dev).

Vite + React + `darkroom-ui`. Deployed to GitHub Pages from `dist/`.

```bash
pnpm install
pnpm run dev
```

Vite opens the browser on start (`server.open`).

```bash
pnpm run build
pnpm run preview
```

Uses `darkroom-ui` from npm (`^0.2.0`). To test unpublished library changes locally, set `"darkroom-ui": "file:../darkroom-ui"` in `package.json`, run `pnpm install`, and build the library first (`cd ../darkroom-ui && pnpm run build`).

- URLs: `src/constants/site.ts`
- EN/ES copy: `src/constants/copy.ts`
- Favicons: `public/`
