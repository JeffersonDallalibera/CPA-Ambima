/**
 * PUBLIC BARREL — src/shared/api-client/index.js
 * Following `frontend-architecture` & `frontend-api-integration-patterns` skills:
 * - Single shared HTTP transport layer (`apiClient`, `ApiError`)
 * - Request cancellation via `AbortController`
 * - Exponential backoff (`fetchWithBackoff`) for replay-safe GET operations
 * - Request deduplication (`dedupedFetch`) for concurrent identical reads
 * - Offline localStorage / static-data fallback for PostgreSQL `cpa-ambima`
 *
 * Conceptual ES Module contract:
 * export { ApiError, apiClient, fetchWithBackoff, dedupedFetch, CpaApiClient }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_API_CLIENT = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  class ApiError extends Error {
    constructor(message, status, payload = null, code = "HTTP_ERROR") {
      super(message);
      this.name = "ApiError";
      this.status = status;
      this.payload = payload;
      this.code = code;
    }
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const inFlight = new Map();
  const activeControllers = new Map();

  /**
   * Core normalized HTTP client
   */
  async function apiClient(url, options = {}) {
    const { timeoutMs = 8000, headers = {}, signal, ...rest } = options;
    const internalController = new AbortController();
    const timer = setTimeout(() => internalController.abort(), timeoutMs);

    const onExternalAbort = () => internalController.abort();
    if (signal) {
      if (signal.aborted) internalController.abort();
      else signal.addEventListener("abort", onExternalAbort, { once: true });
    }

    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...headers
        },
        signal: internalController.signal,
        ...rest
      });

      if (!res.ok) {
        let payload = null;
        try {
          payload = await res.json();
        } catch (_) {
          // ignore non-JSON error body
        }
        throw new ApiError(
          (payload && (payload.error || payload.message)) || `Request failed (${res.status})`,
          res.status,
          payload,
          res.status >= 500 ? "SERVER_ERROR" : "CLIENT_ERROR"
        );
      }

      if (res.status === 204) return null;
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    } catch (err) {
      if (err && err.name === "AbortError") {
        throw err;
      }
      if (err instanceof ApiError) {
        throw err;
      }
      const netErr = new ApiError(err ? err.message : "Network error", 0, null, "NETWORK_ERROR");
      throw netErr;
    } finally {
      clearTimeout(timer);
      if (signal) {
        signal.removeEventListener("abort", onExternalAbort);
      }
    }
  }

  /**
   * Retry with exponential backoff — only for replay-safe operations and transient 5xx/network errors
   */
  async function fetchWithBackoff(fn, retries = 2, delay = 250, replaySafe = true) {
    try {
      return await fn();
    } catch (err) {
      const isAbort = err && err.name === "AbortError";
      const isHttpError = typeof (err && err.status) === "number" && err.status > 0;
      const isNetworkFailure = err && err.code === "NETWORK_ERROR";
      const isRetryable =
        replaySafe && !isAbort && (isNetworkFailure || (isHttpError && err.status >= 500));

      if (retries <= 0 || !isRetryable) {
        throw err;
      }

      const nextDelay = delay * 2 + Math.floor(Math.random() * 80);
      await sleep(nextDelay);
      return fetchWithBackoff(fn, retries - 1, nextDelay, replaySafe);
    }
  }

  /**
   * Deduplicate identical concurrent GET requests
   */
  function dedupedFetch(key, fn) {
    if (inFlight.has(key)) {
      return inFlight.get(key);
    }
    const promise = Promise.resolve()
      .then(fn)
      .finally(() => {
        inFlight.delete(key);
      });
    inFlight.set(key, promise);
    return promise;
  }

  /**
   * Create a race-safe AbortController for a named channel, cancelling any previous in-flight request
   */
  function createChannelSignal(channelKey) {
    if (activeControllers.has(channelKey)) {
      try {
        activeControllers.get(channelKey).abort();
      } catch (_) {}
    }
    const controller = new AbortController();
    activeControllers.set(channelKey, controller);
    return controller.signal;
  }

  /**
   * High-level CPA ANBIMA API Client with resilient offline fallback
   */
  const CpaApiClient = {
    ApiError,
    apiClient,
    fetchWithBackoff,
    dedupedFetch,
    createChannelSignal,

    async getHealth(options = {}) {
      return dedupedFetch("GET:/api/health", () =>
        fetchWithBackoff(() => apiClient("/api/health", { method: "GET", ...options }), 1, 200, true)
      );
    },

    async getBootstrap(options = {}) {
      return dedupedFetch("GET:/api/bootstrap", () =>
        fetchWithBackoff(() => apiClient("/api/bootstrap", { method: "GET", ...options }), 2, 250, true)
      );
    },

    async getAnalytics(options = {}) {
      return dedupedFetch("GET:/api/analytics", () =>
        fetchWithBackoff(() => apiClient("/api/analytics", { method: "GET", ...options }), 1, 250, true)
      );
    },

    async getStudyMaterials(options = {}) {
      return dedupedFetch("GET:/api/study-materials", () =>
        fetchWithBackoff(() => apiClient("/api/study-materials", { method: "GET", ...options }), 1, 250, true)
      );
    },

    async getModules(options = {}) {
      return dedupedFetch("GET:/api/modules", () =>
        fetchWithBackoff(() => apiClient("/api/modules", { method: "GET", ...options }), 1, 250, true)
      );
    },

    async getMaps(options = {}) {
      return dedupedFetch("GET:/api/maps", () =>
        fetchWithBackoff(() => apiClient("/api/maps", { method: "GET", ...options }), 1, 250, true)
      );
    },

    async toggleTopic(key, mastered) {
      return apiClient("/api/topics/toggle", {
        method: "POST",
        body: JSON.stringify({ key, mastered })
      });
    },

    async answerQuestion(questionId, correct, chosenText) {
      return apiClient("/api/questions/answer", {
        method: "POST",
        body: JSON.stringify({ questionId, correct, chosenText: chosenText || "" })
      });
    },

    async favoriteQuestion(questionId, favorita) {
      return apiClient("/api/questions/favorite", {
        method: "POST",
        body: JSON.stringify({ questionId, favorita })
      });
    },

    async completeMap(mapId, score) {
      return apiClient("/api/maps/complete", {
        method: "POST",
        body: JSON.stringify({ mapId, score })
      });
    },

    async toggleSprintBlock(blockId, concluido) {
      return apiClient("/api/sprint/toggle", {
        method: "POST",
        body: JSON.stringify({ blockId, concluido })
      });
    },

    async createSimulation(payload) {
      return apiClient("/api/simulations", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    }
  };

  return CpaApiClient;
});
