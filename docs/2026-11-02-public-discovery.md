# Public discovery review — November 2, 2026

This receipt records the bounded follow-up to the three Dedica reports. It does not record a deployment or a new Dedica score.

## Live findings before changes

- `https://buddyllc.app/` redirects to `https://buddysports.app/`; its robots and sitemap requests also resolve to the canonical host. Keep one public identity rather than building a second company site.
- The canonical homepage already returns readable HTML without JavaScript. The existing sitemap returns XML and unknown public paths return HTTP 404.
- The homepage has no JSON-LD. The existing robots file blocks `ChatGPT-User` alongside training crawlers.

## Local candidate

The shared layout renders company, website and Puck Buddy application identities as JSON-LD. Canonical identifiers link the application to Buddy Tech LLC and reuse official profile links already present on the website. No price, rating, usage total or access entitlement is inferred.

The robots file permits user-requested ChatGPT visits. The existing GPTBot, CCBot, anthropic-ai, Claude-Web and Google-Extended exclusions remain. The canonical sitemap and hosted alias redirect remain unchanged.

## Verification

- All 210 tests pass, including the existing coverage budgets. Lint passes with zero warnings; the production build includes type checking and passes.
- Repository/navigation checks and all four checker tests pass. All 34 public assets are referenced; zero unused assets.
- Five requests against the local production server pass: `/`, `/puckbuddy`, `/robots.txt`, `/sitemap.xml` and an unknown public path. Checks parse the rendered JSON-LD, verify publisher references, validate canonical sitemap URLs, and distinguish allowed ChatGPT-User requests from the retained crawler exclusions. The unknown path returns 404.
- Raw evidence is in ignored `quality-results/dedica-public-discovery/`: `tests.log`, `assets.log`, `build.log` and `production-http.json`.

No payment, subscription, promo, account access, external agent API or store destination changed. Browser conversion flows were not rerun because their implementation is unchanged. No deployment, push, merge or paid kit purchase occurred. The local changes remain on `codex/public-discovery-20261102` in the primary checkout; no temporary worktree was created.
