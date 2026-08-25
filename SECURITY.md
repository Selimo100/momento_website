# Security Policy

## Scope

This repository contains the static website for the Momento iOS app. It has no backend, no
user accounts and no server-side state, so the realistic attack surface is limited to the
published static assets, the dependency tree and the CI workflow.

In scope:

- vulnerabilities in this site's source or build output (for example XSS through rendered content)
- vulnerable or malicious dependencies declared in `package.json` / `package-lock.json`
- misconfiguration in the GitHub Actions workflow

Out of scope: issues in the Momento iOS app itself. Please use the contact address on the
[support page](https://momento.mogicato.ch/#/support) for those.

## Supported Versions

Only the current `main` branch and the version deployed to <https://momento.mogicato.ch> are
supported. There are no maintained release branches.

## Reporting a Vulnerability

**Please do not open a public issue, pull request or discussion for a security problem.**

Report it privately through GitHub's Private Vulnerability Reporting:

1. Open the [Security tab](https://github.com/Selimo100/momento_website/security) of this repository.
2. Choose **Report a vulnerability**.
3. Describe the issue, the affected page or file, and how to reproduce it.

If private reporting is unavailable, contact the repository owner privately through their
GitHub profile instead of disclosing the issue publicly.

Please include enough detail to reproduce the problem, and give the maintainer a reasonable
opportunity to release a fix before disclosing it publicly. You will receive an
acknowledgement of the report and an update once it has been assessed.
