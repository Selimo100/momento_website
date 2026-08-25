# Deployment

The site is served at <https://momento.mogicato.ch>.

## Build output

```bash
npm ci
npm run build
```

This produces `dist/`: `index.html`, hashed JS/CSS bundles under `dist/assets/`, and the
verbatim copies of everything in `public/`. The directory is entirely static — no Node
runtime, no environment variables and no server-side configuration are required to serve it.

Verify a build locally before publishing:

```bash
npm run preview
```

## Hosting requirements

Any static host or web server works. The requirements are minimal:

- Serve `dist/` as the document root.
- No SPA rewrite rules are needed. The app uses a hash router, so `/#/privacy` and
  `/#/support` are resolved client-side and every request hits `index.html` anyway.
- Serve `index.html` with a short cache lifetime and the hashed files under `assets/` with a
  long one — their filenames change on every content change.
- HTTPS should be enforced; the App Store listing links to this domain.

## Publishing

Deployment is performed manually from a verified build of `main` — there is no automated
release workflow in this repository, and CI does not deploy. If deployment is later
automated, add a separate workflow rather than extending `ci.yml`, keep the build and deploy
jobs distinct, and store any host credentials as GitHub Actions secrets scoped to that
workflow's environment.

## Checklist before publishing

- [ ] `npm run lint`, `npm run typecheck` and `npm run build` pass
- [ ] `npm run preview` renders correctly in light and dark theme
- [ ] `/#/privacy` and `/#/support` load — these are linked from the App Store listing
- [ ] Metadata in `index.html` (title, description, Open Graph) still matches the content
- [ ] [`CHANGELOG.md`](../CHANGELOG.md) reflects what is going out
