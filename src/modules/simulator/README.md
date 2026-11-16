# Simulator Module (`src/modules/simulator`)

## Ownership
- **View**: `#view-simulado`
- **Capabilities**:
  - Official 50-Question Exam Mode (2h30) & 20-Question Sprint Mode (1h00)
  - Weighted Question Sampling (M1: 20%, M2: 40%, M3: 30%, M4: 10%)
  - Strict Forward-Only Navigation Lock (ANBIMA Test Center Rule)
  - Coupled Digital Scratchpad + Mandatory HP 12C Financial Calculator
- **Data Dependencies**:
  - `POST /api/simulations`
  - `POST /api/questions/answer`
