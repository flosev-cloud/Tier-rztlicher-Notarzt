# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

**Tier-rztlicher-Notarzt** ("Tierärztlicher Notarzt" — German for *veterinary emergency doctor/service*) is currently a **placeholder/reference repository**, not a working codebase. It contains no source code, build system, tests, or CI configuration.

The actual application referenced by this repository lives externally on the Vibecode platform:

- https://www.vibecodeapp.com/s/cmkeon7en000807hqvmsj8cfp (linked from `README.md`)

Note: the Vibecode domain may be unreachable from sandboxed/remote environments due to network egress policies, so the app itself cannot be inspected from here.

## Repository contents

| File | Description |
|------|-------------|
| `README.md` | A single line: the URL of the Vibecode app. No other documentation. |
| `Webseite.pdf` | A 4-page PDF ("Webseite" = "website" in German). **The pages are blank** — the file contains only white-filled rectangles and no text layer or images. Treat it as a placeholder/failed export, not as a source of information. |
| `CLAUDE.md` | This file. |

There are no other files, directories, dependencies, or configuration.

## Language and domain context

- The project owner works in a German veterinary context (animal shelter / veterinary emergency services). Repository names, file names, and any future content are likely to be in **German** — respond and document in German when the user writes in German.
- Domain vocabulary to expect: Notarzt (emergency doctor), Tierheim (animal shelter), Behandlung (treatment), Impfung (vaccination), Quarantäne (quarantine).

## Development workflow

There is no build, lint, or test tooling in this repository — nothing to install or run.

### Git conventions

- Default branch: `main`.
- Do **not** commit directly to `main`; create a feature branch (or use the session's designated `claude/...` branch) and open a pull request.
- History to date consists of file uploads via the GitHub web UI and a single merged PR (#1, which added the Vibecode link to the README).

## Guidance for AI assistants

1. **Don't invent structure.** This repo has no codebase to follow conventions from. If asked about "the app," clarify that the application is hosted on Vibecode and is not present here.
2. **Don't cite `Webseite.pdf` as documentation** — it is blank. If content is expected there, tell the user the PDF is empty and ask for a re-export.
3. **If real source code is added later**, update this file with: the tech stack, build/run/test commands, directory layout, and any conventions that emerge. Until then, keep this file honest about the repository's minimal state.
4. **Keep the Vibecode link in `README.md` intact** — it is currently the only pointer to the actual application.
