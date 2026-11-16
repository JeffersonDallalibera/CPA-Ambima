export class HP12CEngine {
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
