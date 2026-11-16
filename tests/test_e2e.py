import json
import re
import subprocess
import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

from backend.app import app


def check_js_syntax():
    print("=== [1/6] Validando sintaxe JS (app.js, hp12c.js, data/materiais_estudo_profundos.js) com node -c ===")
    for js_file in ["app.js", "hp12c.js", "data/materiais_estudo_profundos.js"]:
        js_path = ROOT_DIR / js_file
        assert js_path.exists(), f"Arquivo {js_file} não encontrado em {ROOT_DIR}"
        proc = subprocess.run(
            ["node", "-c", str(js_path)],
            capture_output=True,
            text=True,
            cwd=str(ROOT_DIR),
        )
        assert proc.returncode == 0, f"Erro de sintaxe em {js_file}:\n{proc.stderr}"
        print(f"[PASS] Sintaxe válida: {js_file}")


def check_modular_frontend_architecture():
    print("\n=== [2/6] Verificando arquitetura modular em src/shared/ e src/modules/ ===")
    required_files = [
        "src/shared/api-client/index.js",
        "src/shared/store/index.js",
        "src/modules/dashboard/index.js",
        "src/modules/study/index.js",
        "src/modules/questions/index.js",
        "src/modules/decision-maps/index.js",
        "src/modules/flashcards/index.js",
        "src/modules/simulator/index.js",
    ]
    for rel_path in required_files:
        file_path = ROOT_DIR / rel_path
        assert file_path.exists(), f"Módulo obrigatório não encontrado: {rel_path}"
        assert file_path.stat().st_size > 0, f"Módulo vazio: {rel_path}"
        proc = subprocess.run(
            ["node", "--check", str(file_path)],
            capture_output=True,
            text=True,
            cwd=str(ROOT_DIR),
        )
        if proc.returncode != 0 and "Unexpected token 'export'" not in proc.stderr and "Cannot use import statement" not in proc.stderr:
            assert proc.returncode == 0, f"Erro de sintaxe em {rel_path}:\n{proc.stderr}"
        print(f"[PASS] Módulo verificado: {rel_path}")


def check_materiais_profundos():
    print("\n=== [3/6] Validando window.CPA_MATERIAIS_PROFUNDOS (6 tabelas, 8 receitas HP12C, resumos) ===")
    node_script = r"""
const fs = require('fs');
const path = require('path');

global.window = {};
const matCode = fs.readFileSync(path.join(process.cwd(), 'data/materiais_estudo_profundos.js'), 'utf8');
eval(matCode);

const m = global.window.CPA_MATERIAIS_PROFUNDOS;
if (!m || typeof m !== 'object') {
  throw new Error('window.CPA_MATERIAIS_PROFUNDOS não foi definido');
}
if (!Array.isArray(m.tabelasComparativas) || m.tabelasComparativas.length !== 6) {
  throw new Error(`Esperado 6 tabelasComparativas, encontrado ${m.tabelasComparativas ? m.tabelasComparativas.length : 'none'}`);
}
if (!Array.isArray(m.guiaHP12C) || m.guiaHP12C.length !== 8) {
  throw new Error(`Esperado 8 receitas em guiaHP12C, encontrado ${m.guiaHP12C ? m.guiaHP12C.length : 'none'}`);
}
for (const r of m.guiaHP12C) {
  if (!r.titulo || !r.contextoProva || !r.formula || !Array.isArray(r.teclasHP12C) || !r.resultadoEsperado || !r.interpretacao) {
    throw new Error(`Receita HP12C incompleta: ${JSON.stringify(r)}`);
  }
}
if (!m.resumosModulos || (Array.isArray(m.resumosModulos) ? m.resumosModulos.length < 4 : Object.keys(m.resumosModulos).length < 4)) {
  throw new Error('resumosModulos deve conter os 4 módulos');
}
console.log(JSON.stringify({
  ok: true,
  tabelas: m.tabelasComparativas.length,
  receitas: m.guiaHP12C.length
}));
"""
    proc = subprocess.run(
        ["node", "-e", node_script],
        capture_output=True,
        text=True,
        cwd=str(ROOT_DIR),
    )
    assert proc.returncode == 0, f"Falha ao validar CPA_MATERIAIS_PROFUNDOS:\n{proc.stderr}\n{proc.stdout}"
    result = json.loads(proc.stdout.strip().splitlines()[-1])
    print(f"[PASS] CPA_MATERIAIS_PROFUNDOS validado: {result['tabelas']} tabelas comparativas, {result['receitas']} receitas HP 12C.")


def check_hp12c_engine():
    print("\n=== [4/6] Validando HP12CEngine (BDR, TVM FV, PMT Price, VPL NPV e Iframe Estácio) ===")
    hp12c_path = ROOT_DIR / "hp12c.js"
    hp12c_source = hp12c_path.read_text(encoding="utf-8")

    estacio_url = "https://simulado.estacio.br/img/Hp/"
    assert estacio_url in hp12c_source, f"URL {estacio_url} não encontrada em hp12c.js"
    print(f"[PASS] Integração com {estacio_url} verificada em hp12c.js")

    node_script = r"""
const fs = require('fs');
const path = require('path');

global.window = {};
const code = fs.readFileSync(path.join(process.cwd(), 'hp12c.js'), 'utf8');
eval(code);

const HP12CEngine = global.window.HP12CEngine;
if (typeof HP12CEngine !== 'function') {
  throw new Error('HP12CEngine não foi exportada em window.HP12CEngine');
}

function pressSeq(engine, seq) {
  for (const k of seq) {
    engine.pressKey(k);
  }
}

// 1. Cálculo de BDR: 480 * 5.41 / 24 = 108,20
const eng1 = new HP12CEngine();
pressSeq(eng1, ['4', '8', '0', 'ENTER', '5', '.', '4', '1', '*', '2', '4', '/']);
const bdrDisplay = eng1.formatDisplay();
const bdrVal = eng1.getX();
if (bdrDisplay !== '108,20' || Math.abs(bdrVal - 108.20) > 1e-6) {
  throw new Error(`Falha no cálculo de BDR: esperado 108,20 (108.2), obtido display='${bdrDisplay}' val=${bdrVal}`);
}

// 2. Cálculo de TVM Juros Compostos: PV=-1000, i=1, n=12 -> FV=1.126,83
const eng2 = new HP12CEngine();
pressSeq(eng2, ['1', '0', '0', '0', 'CHS', 'PV', '1', 'i', '1', '2', 'n', 'FV']);
const fvDisplay = eng2.formatDisplay();
const fvVal = eng2.getX();
if (fvDisplay !== '1.126,83' || Math.abs(fvVal - 1126.8250301319697) > 1e-4) {
  throw new Error(`Falha no cálculo de TVM FV: esperado '1.126,83', obtido display='${fvDisplay}' val=${fvVal}`);
}

// 3. Cálculo de PMT Tabela Price: PV=10000, i=2, n=12 -> PMT=-945,60
const eng3 = new HP12CEngine();
pressSeq(eng3, ['1', '0', '0', '0', '0', 'PV', '2', 'i', '1', '2', 'n', 'PMT']);
const pmtDisplay = eng3.formatDisplay();
const pmtVal = eng3.getX();
if (pmtDisplay !== '-945,60' || Math.abs(pmtVal - (-945.595966)) > 1e-3) {
  throw new Error(`Falha no cálculo de PMT Price: esperado '-945,60', obtido display='${pmtDisplay}' val=${pmtVal}`);
}

// 4. Cálculo de VPL (NPV): CF0=-1000, CF1=400, CF2=500, CF3=600, i=10% -> NPV = 227,65
const eng4 = new HP12CEngine();
pressSeq(eng4, [
  '1', '0', '0', '0', 'CHS', 'g', 'PV', // CF0 = -1000
  '4', '0', '0', 'g', 'PMT',            // CF1 = 400
  '5', '0', '0', 'g', 'PMT',            // CF2 = 500
  '6', '0', '0', 'g', 'PMT',            // CF3 = 600
  '1', '0', 'i',                        // i = 10%
  'f', 'PV'                             // f NPV
]);
const npvDisplay = eng4.formatDisplay();
const npvVal = eng4.getX();
const expectedNpv = -1000 + 400 / 1.1 + 500 / Math.pow(1.1, 2) + 600 / Math.pow(1.1, 3); // 227.64838467
if (npvDisplay !== '227,65' || Math.abs(npvVal - expectedNpv) > 1e-4) {
  throw new Error(`Falha no cálculo de VPL (NPV): esperado '227,65', obtido display='${npvDisplay}' val=${npvVal}`);
}

console.log(JSON.stringify({
  ok: true,
  bdr: bdrDisplay,
  fv: fvDisplay,
  pmt: pmtDisplay,
  npv: npvDisplay
}));
"""
    proc = subprocess.run(
        ["node", "-e", node_script],
        capture_output=True,
        text=True,
        cwd=str(ROOT_DIR),
    )
    assert proc.returncode == 0, f"Falha nos testes Node.js da HP12CEngine:\n{proc.stderr}\n{proc.stdout}"
    result = json.loads(proc.stdout.strip().splitlines()[-1])
    assert result.get("ok") is True
    print(
        f"[PASS] HP12CEngine validada com sucesso: "
        f"BDR={result['bdr']} | FV={result['fv']} | PMT={result['pmt']} | NPV={result['npv']}"
    )


def check_dom_ids_alignment():
    print("\n=== [5/6] Verificando correspondência de IDs do DOM entre index.html e app.js ===")
    index_html = (ROOT_DIR / "index.html").read_text(encoding="utf-8")
    app_js = (ROOT_DIR / "app.js").read_text(encoding="utf-8")
    hp12c_js = (ROOT_DIR / "hp12c.js").read_text(encoding="utf-8")

    # Verifica inclusão dos scripts obrigatórios em index.html
    assert "data/materiais_estudo_profundos.js" in index_html, "Script data/materiais_estudo_profundos.js não incluído em index.html"
    assert "hp12c.js" in index_html, "Script hp12c.js não incluído em index.html"

    # IDs definidos estaticamente em index.html ou dinamicamente nos templates de app.js / hp12c.js
    defined_ids = set(re.findall(r'id=["\']([^"\']+)["\']', index_html))
    defined_ids.update(re.findall(r'id=["\']([^"\']+)["\']', app_js))
    defined_ids.update(re.findall(r'id=["\']([^"\']+)["\']', hp12c_js))

    # IDs buscados via document.getElementById("...") ou document.getElementById('...')
    queried_literal_ids = set(
        re.findall(r'getElementById\(\s*["\']([^"\']+)["\']\s*\)', app_js)
    )

    # Também captura document.getElementById(`...`) com template literal (ex: `qobj-fb-${qIdx}`)
    queried_template_ids = set(
        re.findall(r'getElementById\(\s*`([^`]+)`\s*\)', app_js)
    )

    # Verifica se variáveis passadas em getElementById(id) (ex: ["q-mod-filter", ...].forEach((id) => document.getElementById(id))) existem
    array_for_each_ids = set()
    for match in re.finditer(r'\[([^\]]+)\]\.forEach\(\s*\(\s*id\s*\)\s*=>\s*\{\s*document\.getElementById\(\s*id\s*\)', app_js):
        items = re.findall(r'["\']([^"\']+)["\']', match.group(1))
        array_for_each_ids.update(items)

    all_queried = queried_literal_ids | queried_template_ids | array_for_each_ids
    assert len(all_queried) > 0, "Nenhum getElementById encontrado em app.js"

    missing_ids = [qid for qid in sorted(all_queried) if qid not in defined_ids]
    assert not missing_ids, f"IDs buscados em app.js mas ausentes em index.html/templates: {missing_ids}"
    print(f"[PASS] Todos os {len(all_queried)} IDs referenciados via getElementById em app.js existem em index.html ou nos templates dinâmicos.")


def check_flask_routes_and_suites():
    print("\n=== [6/6] Testando rotas HTTP Flask e executando test_db.py + test_backend.py ===")
    client = app.test_client()
    routes = [
        "/",
        "/style.css",
        "/app.js",
        "/hp12c.js",
        "/data/materiais_estudo_profundos.js",
        "/api/health",
        "/api/bootstrap",
        "/api/modules",
        "/api/maps",
        "/api/analytics",
        "/api/study-materials",
    ]
    for route in routes:
        res = client.get(route)
        assert res.status_code == 200, f"GET {route} retornou HTTP {res.status_code}, esperado 200"
        res.close()
        print(f"[PASS] GET {route} -> HTTP 200")

    for suite in ["tests/test_db.py", "tests/test_backend.py"]:
        suite_path = ROOT_DIR / suite
        assert suite_path.exists(), f"Suíte {suite} não encontrada"
        proc = subprocess.run(
            [sys.executable, str(suite_path)],
            capture_output=True,
            text=True,
            cwd=str(ROOT_DIR),
        )
        print(proc.stdout.strip())
        if proc.returncode != 0:
            print(proc.stderr.strip())
        assert proc.returncode == 0, f"Falha na execução de {suite} (exit code {proc.returncode})"
        print(f"[PASS] Suíte {suite} aprovada com 100% de sucesso.")


def main():
    check_js_syntax()
    check_modular_frontend_architecture()
    check_materiais_profundos()
    check_hp12c_engine()
    check_dom_ids_alignment()
    check_flask_routes_and_suites()
    print("\n============================================================")
    print("=== E2E TEST SUITE: 100% DE APROVAÇÃO EM TODAS AS CAMADAS ===")
    print("============================================================")


if __name__ == "__main__":
    main()
