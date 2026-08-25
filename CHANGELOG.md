# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). No versioned
release has been published yet, so all entries live under `Unreleased`.

## [Unreleased]

### Added

- GitHub Actions CI workflow running lint, type-check and build on pushes and pull requests.
- Issue forms for bug reports and feature requests, a pull request template and `CODEOWNERS`.
- Dependabot configuration for npm and GitHub Actions updates.
- Contribution guide, security policy, architecture and deployment documentation.
- `.editorconfig` and `typecheck` / `lint:fix` npm scripts.

### Changed

- Replaced the Vite starter README with project documentation.
- Moved `react-router-dom` and `lucide-react` from `devDependencies` to `dependencies`,
  since both are imported by application code.
- Split the theme context object and `useTheme` hook into `src/contexts/theme.ts`, leaving
  `ThemeContext.tsx` as a component-only module. This fixes the one outstanding ESLint
  error (`react-refresh/only-export-components`) and restores the Fast Refresh boundary.

### Removed

- Unused full-resolution app screenshots (`src/assets/appscreenshots/`) and duplicate
  app icons at the repository root; the compressed variants in `src/assets/screens/`
  are the ones the site actually uses.
