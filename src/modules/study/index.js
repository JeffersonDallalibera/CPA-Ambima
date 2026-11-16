/**
 * PUBLIC BARREL — src/modules/study/index.js
 * Feature Module: Interactive Study System, Comparative Financial Tables, HP 12C Practical Guide & Complete Apostilas Reader
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `study` feature.
 *
 * Conceptual ES Module contract:
 * export { STUDY_MODULE_ID, getDeepStudyMaterials, formatMarkdownToHtml, filterModuleTopics }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.study = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const STUDY_MODULE_ID = "study";

  function getDeepStudyMaterials() {
    const raw = (root && root.CPA_MATERIAIS_PROFUNDOS) || {};
    return {
      tabelasComparativas: Array.isArray(raw.tabelasComparativas) ? raw.tabelasComparativas : [],
      guiaHP12C: Array.isArray(raw.guiaHP12C) ? raw.guiaHP12C : [],
      resumosModulos: raw.resumosModulos || {}
    };
  }

  function filterModuleTopics(mod, queryStr) {
    if (!mod || !Array.isArray(mod.topicos)) return [];
    const q = (queryStr || "").trim().toLowerCase();
    if (!q) return mod.topicos;
    return mod.topicos.filter((t) => {
      const hay = `${t.codigo || ""} ${t.titulo || ""} ${t.explicacao || ""} ${(t.gatilhosProva || []).join(" ")} ${(t.pegadinhas || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }

  /**
   * Safe Markdown-to-HTML converter for `/api/study-materials` apostilas
   */
  function formatMarkdownToHtml(mdText) {
    if (!mdText || typeof mdText !== "string") return "";
    const lines = mdText.replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let inList = false;
    let inTable = false;

    const formatInline = (str) =>
      str
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const line = rawLine.trim();

      if (!line) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        if (inTable) {
          out.push("</tbody></table></div>");
          inTable = false;
        }
        continue;
      }

      if (line.startsWith("|") && line.endsWith("|")) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        if (/^\|[\s\-:|]+\|$/.test(line)) {
          continue;
        }
        const cells = line
          .slice(1, -1)
          .split("|")
          .map((c) => formatInline(c.trim()));
        if (!inTable) {
          inTable = true;
          out.push('<div style="overflow-x:auto; margin:12px 0;"><table class="fin-table"><thead><tr>');
          cells.forEach((c) => out.push(`<th>${c}</th>`));
          out.push("</tr></thead><tbody>");
        } else {
          out.push("<tr>");
          cells.forEach((c) => out.push(`<td>${c}</td>`));
          out.push("</tr>");
        }
        continue;
      } else if (inTable) {
        out.push("</tbody></table></div>");
        inTable = false;
      }

      if (line.startsWith("### ")) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push(`<h4 style="margin:16px 0 6px; color:var(--primary); font-size:1rem;">${formatInline(line.slice(4))}</h4>`);
      } else if (line.startsWith("## ")) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push(`<h3 style="margin:20px 0 8px; border-bottom:1px solid var(--border); padding-bottom:6px; font-size:1.12rem;">${formatInline(line.slice(3))}</h3>`);
      } else if (line.startsWith("# ")) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push(`<h2 style="margin:12px 0 10px; color:#10b981; font-size:1.25rem;">${formatInline(line.slice(2))}</h2>`);
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        if (!inList) {
          out.push('<ul style="padding-left:20px; margin:8px 0;">');
          inList = true;
        }
        out.push(`<li style="margin-bottom:5px;">${formatInline(line.slice(2))}</li>`);
      } else if (line.startsWith("> ")) {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push(`<div class="trigger-box" style="margin:10px 0;">${formatInline(line.slice(2))}</div>`);
      } else if (line === "---") {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push('<hr style="border:none; border-top:1px solid var(--border); margin:16px 0;">');
      } else {
        if (inList) {
          out.push("</ul>");
          inList = false;
        }
        out.push(`<p style="margin-bottom:8px; color:var(--text-secondary);">${formatInline(line)}</p>`);
      }
    }

    if (inList) out.push("</ul>");
    if (inTable) out.push("</tbody></table></div>");
    return out.join("\n");
  }

  return {
    STUDY_MODULE_ID,
    getDeepStudyMaterials,
    filterModuleTopics,
    formatMarkdownToHtml
  };
});
