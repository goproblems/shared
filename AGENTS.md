# Repository guidelines

- Keep shared contracts, APIs, and state independent of browser and native APIs.
  Application stores, transports, navigation, persistence, and pages stay in consumers.
- Keep React and other peer dependencies supplied by the consuming application.
- Ship ESM with `.js` relative imports, declarations, and source files. Keep the
  package's `main` entry pointing to built JavaScript.
- Use pnpm and Node.js 24. Run `pnpm check` and `pnpm test` after code changes.
- Use `.github/workflows/release.yml` for versioning and releases. Tags must include
  built `dist/`; keep registry publishing disabled.
