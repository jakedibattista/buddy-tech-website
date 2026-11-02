# Buddy Tech website contributor guide

Follow [the navigation guide](docs/codebase-navigation.md) for file ownership,
purpose introductions, compatibility names and source-index maintenance.

## Checks matched to the change

Run the smallest checks that verify the changed behavior and its affected callers.
Choose checks by impact, not just the number of edited lines.

- Documentation, comments and copy-only edits: review the diff and affected links or wording. Do not require runtime tests, a build, mutation testing, browser checks or full CI.
- Small source changes: run the owning focused tests and relevant lint/type checks. Add a build or HTTP check only when compilation, packaging, routing or response behavior needs verification.
- Browser checks: use the affected flow when the change depends on layout, hydration, navigation or interaction that focused tests cannot establish. Do not run the entire browser suite by default.
- Broader changes: expand checks for shared contracts, dependencies, build configuration, authentication, payments or persistence, and when focused checks fail or leave a concrete risk unresolved.
- Full suites, coverage/mutation passes and full CI are for changes that need that scope, explicit quality audits or release/merge requirements. They are not prerequisites for completing a small local edit. Existing automatic workflows and deployment/merge gates remain unchanged.

Stop when the relevant checks pass unless new evidence justifies more testing.
Report what was checked and any material limit. Do not list unrelated, unrun full
CI or browser suites as blockers or unfinished work for a small edit.
Never relax a baseline to pass a change or present stale evidence as a fresh check.
