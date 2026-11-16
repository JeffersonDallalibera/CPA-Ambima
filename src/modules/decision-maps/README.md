# Decision Maps Module (`src/modules/decision-maps`)

## Ownership
- **View**: `#view-cases`
- **Capabilities**:
  - 10 Official Branching Decision Maps (`Etapa 1 → 2A/2B → 3A/3B → 4A/4B → 5A/5B → END`)
  - Track A (`+1 pt`) vs. Track B (`0 pt`) scoring engine up to 5 points
  - 2 Coupled Objective Questions per Decision Map
- **Data Dependencies**:
  - `GET /api/maps`
  - `POST /api/maps/complete`
