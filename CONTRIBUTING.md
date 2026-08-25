# Contributing

Thanks for your interest in improving the Momento website. This document describes the
conventions this repository follows.

## Getting set up

```bash
git clone https://github.com/Selimo100/momento_website.git
cd momento_website
npm ci
npm run dev
```

You need Node.js 20.19 or newer. There is no environment configuration to set up — the site
is fully static.

## Before you start

- For anything larger than a typo, open an issue first so the approach can be agreed on
  before you spend time on it.
- Bug reports and feature requests both have [issue forms](.github/ISSUE_TEMPLATE) —
  please use them.

## Branching

Work happens on short-lived branches off `main`:

```text
feature/<description>    new functionality or content
fix/<description>        bug fixes
docs/<description>       documentation only
refactor/<description>   restructuring without behaviour change
chore/<description>      dependencies, tooling, housekeeping
ci/<description>         workflow changes
```

Example: `feature/testimonials-section`.

## Commit messages

This repository uses [Conventional Commits](https://www.conventionalcommits.org):

```text
feat: add testimonials section to the landing page
fix: keep navbar readable over the hero image in dark mode
docs: document the deployment process
refactor: extract shared section heading component
chore: update Tailwind to 4.3
ci: cache npm dependencies in the CI workflow
```

Keep the subject in the imperative mood and under ~72 characters. Use the body to explain
*why* when it is not obvious. This convention applies to new commits only — existing history
is not rewritten.

## Code style

- TypeScript throughout; avoid `any` and prefer inferred types over redundant annotations.
- Components are function components in `PascalCase.tsx`, hooks are `useSomething.ts`.
- Styling is Tailwind utility classes. Shared design tokens and reusable class compositions
  live in `src/index.css` — put a new one there rather than repeating a long class string.
- Landing page content belongs in `src/sections/`; anything reused by more than one section
  belongs in `src/components/`.
- Comments should explain non-obvious decisions, not restate the code.
- Respect `prefers-reduced-motion` when adding animation, and keep new markup keyboard
  navigable with visible focus states.

## Checks

Run these before pushing — CI runs the same three:

```bash
npm run lint
npm run typecheck
npm run build
```

There is currently no automated test suite, so please verify visual changes manually in at
least one Chromium- and one WebKit-based browser, in both light and dark theme.

## Pull requests

- Keep pull requests focused on one change.
- Fill in the [pull request template](.github/pull_request_template.md), including
  before/after screenshots for visual changes.
- Link the issue the PR resolves (`Closes #123`).
- Make sure CI is green and review conversations are resolved before merging.
- Pull requests are squash-merged, so the PR title becomes the commit message — give it a
  Conventional Commit subject.

## Releases

The site is versioned with [Semantic Versioning](https://semver.org) (`MAJOR.MINOR.PATCH`)
once tagged releases begin. Notable changes are collected under `Unreleased` in
[`CHANGELOG.md`](CHANGELOG.md); a release moves that section under a version heading, tags
the commit (`vX.Y.Z`) and publishes a GitHub Release with those notes.

## Recommended repository settings

These are branch and repository settings for `main` that this project's workflow assumes.
They can only be configured by the repository owner in GitHub's settings:

- Require a pull request before merging.
- Require the `Lint, type-check and build` status check to pass.
- Require conversation resolution before merging.
- Block force pushes and branch deletion on `main`.
- Allow squash merging only, and automatically delete head branches after merge.
- Enable Dependabot alerts, security updates, and Private Vulnerability Reporting.
