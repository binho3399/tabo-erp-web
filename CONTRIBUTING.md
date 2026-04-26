# Contributing

## Required Checks
- Run `pnpm ci` before opening a PR.
- Keep `pnpm check:bundle` passing.
- Use `pnpm format` for style consistency.

## Project Structure
- `src/pages`: route-level page components only.
- `src/components`: reusable UI and section-level blocks.
- `src/lib`: data access, repository, and domain logic.
- `src/config` and `src/constants`: static app configuration/content tokens.

## Import Boundaries
- Do not import `src/pages` from other layers.
- Keep flow as: pages -> components -> lib/config/constants.

## Performance Guidelines
- Prefer route/section lazy-loading for heavy UI blocks.
- Keep animations viewport-aware and reduced-motion friendly.
- Avoid adding global CSS unless the style must be shared across multiple routes.
