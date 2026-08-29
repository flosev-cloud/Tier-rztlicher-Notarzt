# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Tierärztlicher Notarzt** (German: "Veterinary Emergency Doctor") is a project for a veterinary emergency service. This repository is currently a **placeholder / companion repository**: the actual application is built and hosted externally on [Vibecode](https://www.vibecodeapp.com), a no-code/AI app-building platform. There is no application source code, build system, or test suite in this repository yet.

## Repository Contents

As of the last update, the repository contains only:

| File | Purpose |
|------|---------|
| `README.md` | A single link to the Vibecode app: `https://www.vibecodeapp.com/s/cmkeon7en000807hqvmsj8cfp` |
| `Webseite.pdf` | A 4-page PDF export (German: "Webseite" = "website"), exported from iOS/Adobe Acrobat Reader. The pages render blank and contain no extractable text — it appears to be a placeholder or a failed export of the website. |
| `CLAUDE.md` | This file. |

There are no `package.json`, build scripts, CI workflows, linters, or tests. Commands like `npm install` or `make` have nothing to operate on here.

## Development Workflow

- **Default branch:** `main`.
- **Branching:** Changes are made on feature branches (e.g. `claude/<topic>-<id>`) and merged into `main` via pull requests on GitHub. History shows changes have been made both by direct upload via the GitHub web UI and by PR merges.
- **Pull requests:** Open PRs against `main`. Keep them small — this repository mostly tracks documents and links, not code.
- **Pushing:** Use `git push -u origin <branch-name>` and open a PR rather than pushing to `main` directly.

## Conventions

- **Language:** The project domain is German (repository name, file names like `Webseite.pdf`). Prefer German for user-facing content and file names related to the veterinary service; repository/development documentation (like this file) is in English.
- **Binary assets:** PDFs and similar exports are committed directly to the repository root. If more assets accumulate, consider grouping them in a directory (e.g. `docs/` or `assets/`).
- **External source of truth:** The live app/site is maintained on Vibecode, not in this repository. Do not assume changes here deploy anywhere. If application code is ever exported from Vibecode into this repository, update this file with the real structure, build, and test commands.

## Guidance for AI Assistants

- Do not invent build/test/lint commands — none exist. Verify the repository state first if asked to "run" anything.
- The Vibecode URL in `README.md` is the only pointer to the actual product; treat it as the canonical project reference. (Note: external network access to vibecodeapp.com may be blocked in sandboxed sessions.)
- If asked to build the actual website/app in this repository, that is a greenfield task: clarify requirements (framework, hosting) with the user before scaffolding.
- Keep this file current: when real source code lands in the repository, replace the placeholder description above with actual architecture, commands, and conventions.
