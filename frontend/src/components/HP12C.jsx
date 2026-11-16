import React, { useState, useRef } from 'react';
import { Globe, Calculator } from 'lucide-react';

class HP12CEngine {
  constructor() {
    this.resetAll();
  }

  resetAll() {
    this.stack = [0, 0, 0, 0];
    this.lastX = 0;
    this.entryBuffer = '';
    this.entering = false;
    this.liftEnabled = false;
    this.decimals = 2;
    this.prefix = null;
    this.beginMode = false;
    this.tvm = { n: 0, i: 0, PV: 0, PMT: 0, FV: 0 };
    this.lastTvmKey = false;
    this.cf = [];
    this.mem = new Array(20).fill(0);
    this.errorMsg = null;
  }

  clearFin() {
    this.tvm = { n: 0, i: 0, PV: 0, PMT: 0, FV: 0 };
    this.cf = [];
    this.lastTvmKey = false;
  }

  setX(val) {
    if (!Number.isFinite(val) || Number.isNaN(val)) {
      this.errorMsg = 'Error 0';
      this.entering = false;
      this.entryBuffer = '';
      return;
    }
    this.stack[0] = val;
    this.entering = false;
    this.entryBuffer = '';
  }

  commitEntry() {
    if (this.entering) {
      const val =
        this.entryBuffer === '' || this.entryBuffer === '-' ? 0 : parseFloat(this.entryBuffer);
      this.stack[0] = val;
      this.entering = false;
      this.entryBuffer = '';
    }
  }

  pushStack(val) {
    this.stack[3] = this.stack[2];
    this.stack[2] = this.stack[1];
    this.stack[1] = this.stack[0];
    this.stack[0] = val;
  }

  dropStack() {
    this.stack[0] = this.stack[1];
    this.stack[1] = this.stack[2];
    this.stack[2] = this.stack[3];
  }

  formatDisplay() {
    if (this.errorMsg) return this.errorMsg;
    if (this.entering && this.entryBuffer !== '') {
      return this.entryBuffer.replace('.', ',');
    }
    const x = this.stack[0] || 0;
    const fixed = x.toFixed(this.decimals);
    const [intPart, decPart] = fixed.split('.');
    const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return decPart !== undefined ? `${intFormatted},${decPart}` : intFormatted;
  }

  pressKey(key) {
    if (this.errorMsg && key !== 'CLx' && key !== 'ON') {
      this.errorMsg = null;
    }
    if (key === 'f' || key === 'g' || key === 'STO' || key === 'RCL') {
      this.prefix = this.prefix === key ? null : key;
      return;
    }
    if (this.prefix === 'f') {
      this.prefix = null;
      this.handleFKey(key);
      return;
    }
    if (this.prefix === 'g') {
      this.prefix = null;
      this.handleGKey(key);
      return;
    }
    if (this.prefix === 'STO' && /^[0-9]$/.test(key)) {
      this.prefix = null;
      this.commitEntry();
      this.mem[parseInt(key, 10)] = this.stack[0];
      this.liftEnabled = true;
      return;
    }
    if (this.prefix === 'RCL') {
      this.prefix = null;
      this.commitEntry();
      if (/^[0-9]$/.test(key)) {
        if (this.liftEnabled) this.pushStack(this.mem[parseInt(key, 10)]);
        else this.setX(this.mem[parseInt(key, 10)]);
        this.liftEnabled = true;
      } else if (['n', 'i', 'PV', 'PMT', 'FV'].includes(key)) {
        if (this.liftEnabled) this.pushStack(this.tvm[key]);
        else this.setX(this.tvm[key]);
        this.liftEnabled = true;
      }
      return;
    }

    if (/^[0-9.]$/.test(key)) {
      this.lastTvmKey = false;
      if (!this.entering) {
        if (this.liftEnabled) this.pushStack(0);
        this.entering = true;
        this.entryBuffer = key === '.' ? '0.' : key;
      } else {
        if (key === '.' && this.entryBuffer.includes('.')) return;
        if (this.entryBuffer.replace(/[^0-9]/g, '').length >= 10) return;
        this.entryBuffer += key;
      }
      this.liftEnabled = true;
      return;
    }

    if (key === 'CHS') {
      if (this.entering && this.entryBuffer !== '') {
        this.entryBuffer = this.entryBuffer.startsWith('-')
          ? this.entryBuffer.slice(1)
          : '-' + this.entryBuffer;
      } else {
        this.stack[0] = -this.stack[0];
      }
      return;
    }

    if (key === 'CLx') {
      this.errorMsg = null;
      this.entering = false;
      this.entryBuffer = '';
      this.stack[0] = 0;
      this.liftEnabled = false;
      this.lastTvmKey = false;
      return;
    }

    if (key === 'ON') {
      this.resetAll();
      return;
    }

    if (key === 'ENTER') {
      this.commitEntry();
      this.pushStack(this.stack[0]);
      this.liftEnabled = false;
      this.lastTvmKey = false;
      return;
    }

    if (key === 'x<>y') {
      this.commitEntry();
      const tmp = this.stack[0];
      this.stack[0] = this.stack[1];
      this.stack[1] = tmp;
      this.liftEnabled = true;
      return;
    }

    if (key === 'R↓') {
      this.commitEntry();
      const x = this.stack[0];
      this.stack[0] = this.stack[1];
      this.stack[1] = this.stack[2];
      this.stack[2] = this.stack[3];
      this.stack[3] = x;
      this.liftEnabled = true;
      return;
    }

    if (['+', '-', '*', '/', 'y^x', '%', 'Δ%', '%T'].includes(key)) {
      this.commitEntry();
      this.lastTvmKey = false;
      const x = this.stack[0];
      const y = this.stack[1];
      this.lastX = x;

      if (key === '+') {
        this.dropStack();
        this.setX(y + x);
      } else if (key === '-') {
        this.dropStack();
        this.setX(y - x);
      } else if (key === '*') {
        this.dropStack();
        this.setX(y * x);
      } else if (key === '/') {
        if (x === 0) {
          this.errorMsg = 'Error 0';
          return;
        }
        this.dropStack();
        this.setX(y / x);
      } else if (key === 'y^x') {
        this.dropStack();
        this.setX(Math.pow(y, x));
      } else if (key === '%') {
        this.setX((y * x) / 100);
      } else if (key === 'Δ%') {
        if (y === 0) {
          this.errorMsg = 'Error 0';
          return;
        }
        this.setX(((x - y) / y) * 100);
      } else if (key === '%T') {
        if (y === 0) {
          this.errorMsg = 'Error 0';
          return;
        }
        this.setX((x / y) * 100);
      }
      this.liftEnabled = true;
      return;
    }

    if (key === '1/x') {
      this.commitEntry();
      this.lastX = this.stack[0];
      if (this.stack[0] === 0) {
        this.errorMsg = 'Error 0';
        return;
      }
      this.setX(1 / this.stack[0]);
      this.liftEnabled = true;
      return;
    }

    if (['n', 'i', 'PV', 'PMT', 'FV'].includes(key)) {
      const wasEntering = this.entering;
      this.commitEntry();
      if (wasEntering || !this.lastTvmKey) {
        this.tvm[key] = this.stack[0];
        this.lastTvmKey = true;
        this.liftEnabled = true;
      } else {
        const solved = this.solveTVM(key);
        this.tvm[key] = solved;
        this.setX(solved);
        this.lastTvmKey = true;
        this.liftEnabled = true;
      }
    }
  }

  handleFKey(key) {
    this.commitEntry();
    if (/^[0-9]$/.test(key)) {
      this.decimals = parseInt(key, 10);
    } else if (key === 'FIN' || key === 'x<>y') {
      this.clearFin();
    } else if (key === 'REG' || key === 'CLx') {
      this.resetAll();
    } else if (key === 'PV' || key === 'NPV') {
      const r = this.tvm.i / 100;
      let npv = 0;
      let period = 0;
      for (let idx = 0; idx < this.cf.length; idx++) {
        const item = this.cf[idx];
        if (idx === 0) npv += item.val;
        else {
          for (let k = 0; k < item.count; k++) {
            period++;
            npv += item.val / Math.pow(1 + r, period);
          }
        }
      }
      this.setX(npv);
      this.liftEnabled = true;
    } else if (key === 'FV' || key === 'IRR') {
      const irr = this.solveIRR();
      if (irr === null) this.errorMsg = 'Error 3';
      else {
        this.tvm.i = irr;
        this.setX(irr);
      }
      this.liftEnabled = true;
    }
  }

  handleGKey(key) {
    this.commitEntry();
    if (key === '7' || key === 'BEG') this.beginMode = true;
    else if (key === '8' || key === 'END') this.beginMode = false;
    else if (key === 'n' || key === '12x') {
      const val = this.stack[0] * 12;
      this.setX(val);
      this.tvm.n = val;
      this.lastTvmKey = true;
      this.liftEnabled = true;
    } else if (key === 'i' || key === '12÷') {
      const val = this.stack[0] / 12;
      this.setX(val);
      this.tvm.i = val;
      this.lastTvmKey = true;
      this.liftEnabled = true;
    } else if (key === 'PV' || key === 'CF0') {
      this.cf = [{ val: this.stack[0], count: 1 }];
      this.liftEnabled = true;
    } else if (key === 'PMT' || key === 'CFj') {
      if (!this.cf.length) this.cf.push({ val: 0, count: 1 });
      this.cf.push({ val: this.stack[0], count: 1 });
      this.liftEnabled = true;
    } else if (key === 'FV' || key === 'Nj') {
      if (this.cf.length > 0) this.cf[this.cf.length - 1].count = Math.max(1, Math.round(this.stack[0]));
      this.liftEnabled = true;
    } else if (key === 'y^x' || key === 'sqrt') {
      if (this.stack[0] < 0) {
        this.errorMsg = 'Error 0';
        return;
      }
      this.setX(Math.sqrt(this.stack[0]));
      this.liftEnabled = true;
    } else if (key === 'ENTER' || key === 'LSTx') {
      if (this.liftEnabled) this.pushStack(this.lastX);
      else this.setX(this.lastX);
      this.liftEnabled = true;
    }
  }

  solveTVM(target) {
    let { n, i, PV, PMT, FV } = this.tvm;
    const r = i / 100;
    const k = this.beginMode ? 1 + r : 1;
    if (target === 'FV') {
      if (Math.abs(r) < 1e-12) return -(PV + PMT * n);
      const factor = Math.pow(1 + r, n);
      return -(PV * factor + PMT * k * ((factor - 1) / r));
    }
    if (target === 'PV') {
      if (Math.abs(r) < 1e-12) return -(FV + PMT * n);
      const factor = Math.pow(1 + r, n);
      return -((FV + PMT * k * ((factor - 1) / r)) / factor);
    }
    if (target === 'PMT') {
      if (n === 0) return 0;
      if (Math.abs(r) < 1e-12) return -(PV + FV) / n;
      const factor = Math.pow(1 + r, n);
      return -((PV * factor + FV) * r) / (k * (factor - 1));
    }
    if (target === 'n') {
      if (Math.abs(r) < 1e-12) return PMT === 0 ? 0 : -(PV + FV) / PMT;
      const num = PMT * k - FV * r;
      const den = PMT * k + PV * r;
      if (den === 0 || num / den <= 0) return 0;
      return Math.log(num / den) / Math.log(1 + r);
    }
    if (target === 'i') {
      let guess = 0.01;
      for (let iter = 0; iter < 100; iter++) {
        const gK = this.beginMode ? 1 + guess : 1;
        const factor = Math.pow(1 + guess, n);
        const f =
          Math.abs(guess) < 1e-9
            ? PV + PMT * n + FV
            : PV * factor + PMT * gK * ((factor - 1) / guess) + FV;
        const delta = 1e-6;
        const g2 = guess + delta;
        const gK2 = this.beginMode ? 1 + g2 : 1;
        const factor2 = Math.pow(1 + g2, n);
        const f2 = PV * factor2 + PMT * gK2 * ((factor2 - 1) / g2) + FV;
        const df = (f2 - f) / delta;
        if (Math.abs(df) < 1e-12) break;
        const next = guess - f / df;
        if (Math.abs(next - guess) < 1e-9) {
          guess = next;
          break;
        }
        guess = next;
      }
      return guess * 100;
    }
    return 0;
  }

  solveIRR() {
    if (this.cf.length < 2) return null;
    let guess = 0.02;
    for (let iter = 0; iter < 120; iter++) {
      const calcNpv = (rate) => {
        let sum = 0;
        let p = 0;
        for (let idx = 0; idx < this.cf.length; idx++) {
          if (idx === 0) sum += this.cf[0].val;
          else {
            for (let c = 0; c < this.cf[idx].count; c++) {
              p++;
              sum += this.cf[idx].val / Math.pow(1 + rate, p);
            }
          }
        }
        return sum;
      };
      const f = calcNpv(guess);
      if (Math.abs(f) < 1e-7) return guess * 100;
      const delta = 1e-6;
      const df = (calcNpv(guess + delta) - f) / delta;
      if (Math.abs(df) < 1e-12) break;
      guess = guess - f / df;
    }
    return guess * 100;
  }
}

// Autêntico layout 10x4 da HP 12C com ENTER vertical (row-span-2) na coluna 6
const BUTTON_LAYOUT = [
  // Linha 1 (10 teclas)
  { key: 'n', top: '12x', main: 'n' },
  { key: 'i', top: '12÷', main: 'i' },
  { key: 'PV', f: 'NPV', top: 'CFo', main: 'PV' },
  { key: 'PMT', top: 'CFj', main: 'PMT' },
  { key: 'FV', f: 'IRR', top: 'Nj', main: 'FV' },
  { key: 'CHS', main: 'CHS' },
  { key: '7', top: 'BEG', main: '7' },
  { key: '8', top: 'END', main: '8' },
  { key: '9', main: '9' },
  { key: '/', main: '÷' },

  // Linha 2 (10 teclas)
  { key: 'y^x', top: '√x', main: 'yˣ' },
  { key: '1/x', main: '1/x' },
  { key: '%T', main: '%T' },
  { key: 'Δ%', main: 'Δ%' },
  { key: '%', main: '%' },
  { key: 'R↓', main: 'R↓' },
  { key: '4', main: '4' },
  { key: '5', main: '5' },
  { key: '6', main: '6' },
  { key: '*', main: '×' },

  // Linha 3 (9 teclas + ENTER vertical que ocupa linhas 3 e 4 na coluna 6)
  { key: 'R/S', main: 'R/S' },
  { key: 'SST', main: 'SST' },
  { key: 'x<>y', f: 'FIN', main: 'x≷y' },
  { key: 'CLx', f: 'REG', main: 'CLx' },
  { key: 'CHS_ALT', main: 'EEX', disabled: true },
  { key: 'ENTER', top: 'LSTx', main: 'E N T E R', rowSpan2: true },
  { key: '1', main: '1' },
  { key: '2', main: '2' },
  { key: '3', main: '3' },
  { key: '-', main: '−' },

  // Linha 4 (9 teclas ao redor do ENTER vertical)
  { key: 'ON', main: 'ON' },
  { key: 'f', main: 'f', variant: 'f' },
  { key: 'g', main: 'g', variant: 'g' },
  { key: 'STO', main: 'STO' },
  { key: 'RCL', main: 'RCL' },
  { key: '0', main: '0' },
  { key: '.', main: '·' },
  { key: 'Σ+', main: 'Σ+', disabled: true },
  { key: '+', main: '+' },
];

export default function HP12C({ compact = false }) {
  const engineRef = useRef(new HP12CEngine());
  const [, setTick] = useState(0);
  const [mode, setMode] = useState('native'); // 'native' | 'estacio'

  const eng = engineRef.current;

  const handlePress = (key) => {
    if (key === 'CHS_ALT' || key === 'R/S' || key === 'SST' || key === 'Σ+') return;
    eng.pressKey(key);
    setTick((t) => t + 1);
  };

  const handleKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) handlePress(e.key);
    else if (e.key === '.' || e.key === ',') handlePress('.');
    else if (e.key === '+') handlePress('+');
    else if (e.key === '-') handlePress('-');
    else if (e.key === '*') handlePress('*');
    else if (e.key === '/') {
      e.preventDefault();
      handlePress('/');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handlePress('ENTER');
    } else if (e.key === 'Backspace' || e.key === 'Escape') {
      handlePress('CLx');
    }
  };

  if (mode === 'estacio') {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-zinc-950 p-3 shadow-2xl">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Globe className="h-4 w-4" /> Emulador HP 12C (Estácio)
          </span>
          <button
            onClick={() => setMode('native')}
            className="rounded-lg bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:bg-zinc-700"
          >
            <Calculator className="mr-1 inline h-3.5 w-3.5" />
            Voltar p/ HP 12C Nativa
          </button>
        </div>
        <iframe
          src="https://simulado.estacio.br/img/Hp/"
          title="HP 12C Estácio"
          className="h-[400px] w-full rounded-xl border border-zinc-800 bg-black"
        />
      </div>
    );
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="rounded-2xl border-2 border-amber-500/70 bg-gradient-to-b from-zinc-800 to-zinc-950 p-3.5 shadow-2xl outline-none select-none focus:ring-2 focus:ring-amber-400/50"
    >
      {/* Top Gold Plate */}
      <div className="mb-2.5 flex items-center justify-between rounded-lg bg-gradient-to-r from-amber-500 via-amber-200 to-amber-600 px-3 py-1.5 text-zinc-950">
        <div className="flex items-center gap-2">
          <span className="rounded bg-zinc-950 px-1.5 py-0.5 font-serif text-sm font-black italic text-amber-200">
            hp
          </span>
          <span className="text-xs font-extrabold tracking-wide uppercase">
            12c financial
          </span>
        </div>
        <button
          onClick={() => setMode('estacio')}
          className="rounded-md bg-zinc-950/90 px-2 py-0.5 text-[11px] font-bold text-amber-200 hover:bg-zinc-900"
          title="Abrir https://simulado.estacio.br/img/Hp/"
        >
          🌐 Estácio
        </button>
      </div>

      {/* LCD Screen */}
      <div className="mb-2 rounded-lg border border-zinc-600 bg-zinc-700 p-1.5">
        <div className="rounded bg-[#9ca986] px-3 py-2 font-mono text-zinc-950 shadow-inner">
          <div className="min-h-[32px] text-right text-2xl font-extrabold tracking-wider">
            {eng.formatDisplay()}
          </div>
          <div className="mt-0.5 flex items-center justify-between border-t border-zinc-900/20 pt-0.5 text-[10px] font-bold">
            <span>{eng.prefix ? eng.prefix.toUpperCase() : ' '}</span>
            <span>{eng.beginMode ? 'BEGIN' : 'END'}</span>
            <span>RPN</span>
            <span className="opacity-75">
              Y: {eng.stack[1].toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>

      {/* TVM Strip */}
      <div className="mb-2.5 flex flex-wrap justify-between gap-1 rounded-md bg-black/40 px-2.5 py-1 font-mono text-[11px] text-amber-300">
        <span><b>n:</b>{eng.tvm.n.toFixed(1)}</span>
        <span><b>i:</b>{eng.tvm.i.toFixed(2)}%</span>
        <span><b>PV:</b>{eng.tvm.PV.toFixed(0)}</span>
        <span><b>PMT:</b>{eng.tvm.PMT.toFixed(1)}</span>
        <span><b>FV:</b>{eng.tvm.FV.toFixed(0)}</span>
      </div>

      {/* 10x4 Symmetrical Grid with tall vertical ENTER */}
      <div className="grid grid-cols-10 gap-1">
        {BUTTON_LAYOUT.map((b) => {
          const isF = b.variant === 'f';
          const isG = b.variant === 'g';
          return (
            <button
              key={b.key}
              type="button"
              onClick={() => handlePress(b.key)}
              className={`${b.rowSpan2 ? 'row-span-2 min-h-[84px]' : 'min-h-[40px]'} flex flex-col items-center justify-between rounded-md border border-b-[3px] px-0.5 py-1 transition-transform active:translate-y-[1px] active:border-b ${
                isF
                  ? 'border-amber-700 bg-gradient-to-b from-amber-400 to-amber-600 text-zinc-950'
                  : isG
                  ? 'border-sky-700 bg-gradient-to-b from-sky-400 to-sky-600 text-white'
                  : 'border-zinc-950 bg-gradient-to-b from-zinc-700 to-zinc-800 text-white hover:from-zinc-600'
              }`}
            >
              <span className="text-[9px] font-extrabold leading-none text-amber-400">
                {b.f || '\u00A0'}
              </span>
              <span
                className={`${
                  b.rowSpan2 ? 'text-[10px] leading-tight [writing-mode:horizontal-tb]' : 'text-[11px] leading-tight'
                } font-extrabold text-center`}
              >
                {b.main}
              </span>
              <span className="text-[9px] font-bold leading-none text-sky-400">
                {b.top || '\u00A0'}
              </span>
            </button>
          );
        })}
      </div>

      {!compact && (
        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 border-t border-zinc-800 pt-2 text-[11px] text-zinc-400">
          <span>
            <b className="text-zinc-200">BDR:</b>{' '}
            <code className="rounded bg-black px-1 text-emerald-400">480 ENTER 5.41 × 24 ÷</code>
          </span>
          <span>
            <b className="text-zinc-200">Fisher:</b>{' '}
            <code className="rounded bg-black px-1 text-emerald-400">1.12 ENTER 1.045 ÷ 1 - 100 ×</code>
          </span>
          <span>
            <b className="text-zinc-200">Limpar TVM:</b>{' '}
            <code className="rounded bg-black px-1 text-amber-300">f x≷y</code>
          </span>
        </div>
      )}
    </div>
  );
}
