# Shared API Client (`src/shared/api-client`)

## Ownership & Purpose
Centralized HTTP transport client for communicating with the Python Flask + PostgreSQL (`cpa-ambima`) backend.

## Implemented Patterns (`frontend-api-integration-patterns`)
- **Error Normalization**: `ApiError` with HTTP `status`, `payload`, and `code`.
- **Request Cancellation**: `AbortController` per request + `createChannelSignal(channel)` for race-condition protection.
- **Exponential Backoff**: `fetchWithBackoff` for replay-safe `GET` endpoints (`/api/bootstrap`, `/api/analytics`, `/api/study-materials`, `/api/health`).
- **Request Deduplication**: `dedupedFetch` prevents duplicate concurrent calls across modules.
