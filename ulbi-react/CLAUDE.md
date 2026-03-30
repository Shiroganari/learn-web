# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm start              # Dev server on port 3005 (with HMR)

# Build
npm run build:dev      # Development build
npm run build:prod     # Production build (output: build/)

# Linting
npm run lint:ts        # Check TypeScript/TSX files
npm run lint:ts:fix    # Auto-fix TypeScript/TSX lint issues
npm run lint:scss      # Check SCSS files
npm run lint:scss:fix  # Auto-fix SCSS lint issues

# Testing
npm test               # Run all Jest tests
```

## Architecture

This project follows **Feature-Sliced Design (FSD)**. The layer hierarchy (top layers can import from lower layers only):

```
app → pages → widgets → features → entities → shared
```

- **`src/app/`** — App initialization: providers (ThemeProvider, AppRouter), global styles
- **`src/pages/`** — Route-level page components (lazy-loaded via React.lazy)
- **`src/widgets/`** — Composite UI blocks (Header, Sidebar, PageLoader)
- **`src/features/`** — User-facing features with business logic
- **`src/entities/`** — Domain entities/models
- **`src/shared/`** — Reusable primitives: ui components, config, lib utilities, assets

Path aliases are configured for each FSD layer: `@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared`.

## Key Patterns

**Routing:** React Router v7. Route definitions live in `src/shared/config/routeConfig/routeConfig.tsx`. The `AppRouter` wraps routes in a `<Suspense>` with `PageLoader` fallback.

**Theming:** Light/Dark theme via React Context (`ThemeProvider`). Theme persisted in `localStorage` under key `LOCAL_STORAGE_THEME_KEY`.

**i18n:** i18next with HTTP backend loading from `public/locales/{lang}/{namespace}.json`. Fallback language is Russian (`ru`). ESLint enforces that **all UI strings must use i18n** — the `i18next/no-literal-string` rule is set to `error`, so hardcoded strings in JSX will fail linting.

**Styling:** SCSS with CSS Modules. Import styles as `import cls from './Component.module.scss'` and apply as `className={cls.root}`.

**SVGs:** Import as React components via `@svgr/webpack`: `import Icon from './icon.svg'` → `<Icon />`.

**Build flag:** `__IS_DEV__` is a global boolean defined by webpack (true in dev, false in prod builds).

## Tech Stack

- React 19, TypeScript 5.8, Webpack 5
- React Router v7
- i18next + react-i18next
- Jest (jsdom environment), ESLint 9 (flat config), Stylelint
- No Redux/Zustand — state is currently React Context only
