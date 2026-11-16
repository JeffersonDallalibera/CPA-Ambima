// Autêntico layout 10x4 da HP 12C com ENTER vertical (row-span-2) na coluna 6
export const BUTTON_LAYOUT = [
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
