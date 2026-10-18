# RiskEye — Detect. Predict. Protect.

A transaction fraud-detection **dashboard prototype** (hackathon / MVP demo).
Everything runs in the browser on **synthetic data**. There is no backend, no database and no real banking connection.

## What is real, and what is simulated

| Area | Status |
|---|---|
| Fraud scoring | **Deterministic rule-based engine** (`src/utils/fraudScoringEngine.ts`, 20 rules). It is **not** a trained machine-learning model and no accuracy metrics are claimed. |
| Risk bands | 0–29 Low, 30–59 Medium, 60–79 High, 80–100 Critical (configurable demo thresholds). |
| Explanations | Every score is baseline 5 + the points of each triggered rule, clamped to 0–100. The detail view lists each rule and its points. |
| Transactions | **Synthetic**, generated in the browser by a simulator (play / pause / speed / "Attack Surge"). Capped at 200 records. |
| Alerts / cases | Created from scored transactions; case status, assignee and notes are editable. |
| "Block" / "Approve" | Status labels in the demo only. No payment is affected. A block or dismissal is not proof of fraud or of legitimacy. |
| Persistence | **Browser `localStorage` only** (per browser, not shared, can be cleared). "Reset Demo" restores the seed data. |
| Authentication | **Demo gate only.** See below. |
| CSV | Import validates columns, rejects invalid rows and duplicate IDs, scores rows with the engine. Export neutralises spreadsheet formulas (`=`, `+`, `-`, `@`). |

## Demo authentication (not secure)

Sign-in is checked **in the browser** against four built-in demo accounts and a published passphrase.
It only gates the demo UI; it does not protect data. Anyone can read the source or edit `localStorage`.

- Demo account: `alex.mercer@riskeye.security`, password `RiskEye-Demo-2026` (or use *1-Click Demo Sign In*).
- Other credentials are rejected. "Create a local demo profile" creates a profile that exists only in your browser and collects no password.
- Before any real use, replace this with server-side authentication (OIDC / session cookies) and move data to a server-side database with authorisation checks.

## Setup

Requires Node 18+.

```bash
npm ci
npm run dev        # http://localhost:5173
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run typecheck` | TypeScript project check |
| `npm run lint` | oxlint |
| `npm test` | Vitest unit tests (scoring engine, seed consistency, auth rejection, CSV safety) |
| `npm run build` | Type check + production build into `dist/` |
| `npm start` | Serve the production build (`$PORT`, default 4173) |

## Deployment

The app is a static single-page app. No environment variables or secrets are required.

1. `npm ci && npm run build`
2. Serve `dist/` from any static host, or run `npm start`.
3. On Replit: set the run command to `npm start` after building, or deploy `dist/` as a static site.

A successful build does not make this production-ready: see the limitations above.

## Known limitations

- Client-side demo auth and `localStorage` persistence (no server-side security or shared state).
- Rule weights are demonstration values, not tuned on real data.
- Google Fonts load from the network (system-font fallbacks are defined).
- The JS bundle is ~870 kB (not code-split).
- Some `oxlint` advisory warnings remain (React Compiler purity / set-state-in-effect patterns).
