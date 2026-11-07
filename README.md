# Finance Dashboard — Frontend

> Full-stack Finance Dashboard for operators: KPIs, revenue/expense trends, product economics, sales, and 12‑month forecasts. This repo is the React/Vite UI; data comes from the MongoDB REST API.

**Backend (API & data):** [github.com/gipsy/finance-dashboard-be](https://github.com/gipsy/finance-dashboard-be)

## About this project

**Finance Dashboard** is a full-stack app to explore company finances in one place—KPIs, trends, products, transactions, and revenue forecasting—split across two repositories:

| Repository | Role |
|------------|------|
| **This repo** ([finance-dashboard-fe](https://github.com/gipsy/finance-dashboard-fe)) | Browser UI: charts, tables, navigation, and client-side prediction |
| [finance-dashboard-be](https://github.com/gipsy/finance-dashboard-be) | REST API and MongoDB persistence |

The frontend talks to the backend only over HTTP. It does not embed business rules or store data; [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) loads KPI, product, and transaction JSON from the API and drives [Recharts](https://recharts.org/) and [MUI Data Grid](https://mui.com/x/react-data-grid/) on the **Dashboard** (`/`) and **Predictions** (`/predictions`) routes.

**Live:** [finance-dashboard-fe.vercel.app](https://finance-dashboard-fe.vercel.app) (API: [old-sound-6213.fly.dev](https://old-sound-6213.fly.dev))

## Features

- **Dashboard** — responsive grid of charts and tables fed by KPI, product, and transaction endpoints:
  - Revenue, expenses, and profit trends (area, bar, and line charts)
  - Operational vs non-operational expenses
  - Expense breakdown by category (pie charts)
  - Product catalog and recent transactions (MUI Data Grid)
- **Predictions** — historical revenue with a linear regression line and optional 12‑month ahead forecast

## Tech stack

- [Vite](https://vitejs.dev/) + TypeScript
- [React 18](https://react.dev/) with [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/) (theme and layout)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) for API data
- [Recharts](https://recharts.org/) for charts; [regression](https://www.npmjs.com/package/regression) for the prediction model

## Prerequisites

- Node.js **22+** (see `engines` in `package.json`; used by Vercel on deploy)
- Backend API running and reachable (see linked repo above)

## Deployment

| Component | Host | URL |
|-----------|------|-----|
| Frontend (this repo) | [Vercel](https://vercel.com) — project `finance-dashboard-fe`, team `taras-havryshs-projects` | https://finance-dashboard-fe.vercel.app |
| Backend API | [Fly.io](https://fly.io) — app `old-sound-6213` (see `fly.toml` in [finance-dashboard-be](https://github.com/gipsy/finance-dashboard-be)) | https://old-sound-6213.fly.dev |

Production deploys: pushes to `main` trigger Vercel via the GitHub integration (`vercel[bot]`).

## Configuration

The app only needs **`VITE_BASE_URL`** (see `src/state/api.ts`).

| Environment | Value |
|-------------|--------|
| Production (Vercel) | `https://old-sound-6213.fly.dev/` |
| Local dev against Fly API | same as production |
| Local dev against local API | `http://localhost:9000/` (default backend port) |

**Local setup**

```bash
cp .env.example .env.local
# edit VITE_BASE_URL if you run the API locally
```

If the repo is linked to Vercel (`vercel link`), refresh env vars with:

```bash
vercel env pull .env.local
```

`VITE_BASE_URL` must end with a trailing slash.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm install`  | Install dependencies     |
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Typecheck + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint on `src/`         |

## Project layout

```
src/
  scenes/dashboard/   # Main dashboard rows (charts + grids)
  scenes/predictions/ # Revenue regression / forecast page
  scenes/navbar/      # App navigation
  state/              # RTK Query API client and types
  components/         # Shared dashboard UI pieces
```

## Related repository

Backend API, models, and deployment: [gipsy/finance-dashboard-be](https://github.com/gipsy/finance-dashboard-be)
