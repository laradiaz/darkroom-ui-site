# darkroom-ui-site

Marketing site for [darkroom-ui](https://www.npmjs.com/package/darkroom-ui).

```bash
pnpm install
pnpm run dev
```

Vite opens the browser on start (`server.open`).

Production build:

```bash
pnpm run build
pnpm run preview
```

Uses `darkroom-ui` from npm (`^0.2.0`). To test unpublished library changes locally, temporarily set `"darkroom-ui": "file:../darkroom-ui"` in `package.json`, run `pnpm install`, and build the library first (`cd ../darkroom-ui && pnpm run build`).

Favicons are in `public/`. Edit `src/constants/site.ts` for URLs.
