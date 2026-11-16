# Dashboard Module (`src/modules/dashboard`)

## Ownership
- **View**: `#view-dashboard`
- **Capabilities**:
  - ANBIMA Weighted Readiness Score (20% / 40% / 30% / 10%)
  - Module Executive Telemetry Cards
  - Hour-by-Hour Sprint Schedule (`sprint_blocks` in PostgreSQL `cpa-ambima`)
  - Official Exam Cheat Sheet (`cola_cards` with instant search filter)
- **Data Dependencies**:
  - `GET /api/bootstrap`
  - `GET /api/analytics`
  - `POST /api/sprint/toggle`
