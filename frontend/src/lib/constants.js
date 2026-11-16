import {
  LayoutDashboard,
  ClipboardCheck,
  Library,
  GitBranch,
  BookOpenText,
  Layers,
} from 'lucide-react';

export const MODULES_META = {
  1: { short: 'SFN & Economia', weight: 20, label: 'Módulo 1 — SFN & Economia' },
  2: { short: 'Produtos', weight: 40, label: 'Módulo 2 — Produtos' },
  3: { short: 'Cliente, Ética & Ilícitos', weight: 30, label: 'Módulo 3 — Cliente, Ética & Ilícitos' },
  4: { short: 'Inovação: ESG, DeFi & IA', weight: 10, label: 'Módulo 4 — Inovação: ESG, DeFi & IA' },
};

export const MODULE_ORDER = [2, 3, 1, 4];

export const PASS_THRESHOLD = 70;
export const POMODORO_SECONDS = 50 * 60;

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Visão geral', icon: LayoutDashboard, hotkey: '1' },
  { id: 'simulados', label: 'Simulados', icon: ClipboardCheck, hotkey: '2' },
  { id: 'questoes', label: 'Banco de questões', icon: Library, hotkey: '3' },
  { id: 'mapas', label: 'Mapas de decisão', icon: GitBranch, hotkey: '4' },
  { id: 'estudo', label: 'Estudo', icon: BookOpenText, hotkey: '5' },
  { id: 'flashcards', label: 'Flashcards', icon: Layers, hotkey: '6' },
];

export const ERROR_REASONS = [
  { id: 'conceito', label: 'Conceito' },
  { id: 'pegadinha', label: 'Pegadinha' },
  { id: 'calculo', label: 'Cálculo' },
  { id: 'desatencao', label: 'Desatenção' },
];
