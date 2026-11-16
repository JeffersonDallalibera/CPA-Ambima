import { createContext, useContext } from 'react';

export const AppDataContext = createContext(null);
export const UiContext = createContext(null);

// Dados do servidor + progresso do usuário + ações persistidas.
export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error('useAppData deve ser usado dentro de <AppProvider>');
  return ctx;
}

// Navegação entre telas, calculadora e paleta de comandos.
export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error('useUi deve ser usado dentro de <AppProvider>');
  return ctx;
}
