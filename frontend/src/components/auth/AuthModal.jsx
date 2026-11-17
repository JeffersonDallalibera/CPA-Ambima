import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck, Lock, Mail, User, X, KeyRound } from 'lucide-react';

export default function AuthModal({ open, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'forgot' | 'reset'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setAlias] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  useEffect(() => {
    if (!open || !googleClientId) return;
    if (document.getElementById('google-gsi-script')) return;
    const script = document.createElement('script');
    script.id = 'google-gsi-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [open, googleClientId]);

  if (!open) return null;

  const handleGoogleClick = () => {
    setError('');
    if (!googleClientId || !window.google?.accounts?.id) {
      setError('Configure VITE_GOOGLE_CLIENT_ID no ambiente para ativar o botão Google OAuth2.');
      return;
    }
    window.google.accounts.id.initialize({
      client_id: googleClientId,
      callback: async (response) => {
        try {
          setLoading(true);
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: response.credential }),
          });
          const data = await res.json();
          if (!res.ok) {
            setError(data.error || 'Erro ao autenticar com Google.');
            return;
          }
          localStorage.setItem('cpa_jwt_token', data.token);
          localStorage.setItem('cpa_jwt_user', JSON.stringify(data.user));
          onAuthSuccess(data.user, data.token);
          onClose();
        } catch {
          setError('Falha de rede ao validar Google.');
        } finally {
          setLoading(false);
        }
      },
    });
    window.google.accounts.id.prompt();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);
    try {
      if (mode === 'forgot') {
        const res = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || 'Erro ao solicitar código.');
          return;
        }
        setInfo(
          data.devCode
            ? `Modo dev (sem SMTP): use o código ${data.devCode}`
            : 'Código de 6 dígitos enviado para o seu Gmail!'
        );
        setMode('reset');
        return;
      }

      if (mode === 'reset') {
        const res = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, code, newPassword }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || 'Código inválido ou expirado.');
          return;
        }
        setInfo('Senha redefinida com sucesso! Faça login.');
        setMode('login');
        return;
      }

      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, alias }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Falha na autenticação.');
        return;
      }
      localStorage.setItem('cpa_jwt_token', data.token);
      localStorage.setItem('cpa_jwt_user', JSON.stringify(data.user));
      onAuthSuccess(data.user, data.token);
      onClose();
    } catch {
      setError('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {mode === 'login' && 'Entrar na Plataforma'}
                {mode === 'register' && 'Criar Conta Segura'}
                {mode === 'forgot' && 'Recuperar Senha (Gmail)'}
                {mode === 'reset' && 'Definir Nova Senha'}
              </h2>
              <p className="text-[11px] text-slate-400">
                Google OAuth2 + JWT + Anonimização LGPD
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {(mode === 'login' || mode === 'register') && (
          <button
            type="button"
            onClick={handleGoogleClick}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
          >
            <span>G</span> Continuar com Google
          </button>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'register' && (
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-300">Apelido</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="Ex: Candidato CPA"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-300">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@gmail.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {(mode === 'login' || mode === 'register') && (
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-300">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          {mode === 'reset' && (
            <>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-300">
                  Código de 6 dígitos
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="000000"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 font-mono text-sm text-white outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-300">Nova Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </>
          )}

          {info && (
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/15 px-3 py-2 text-xs text-emerald-300">
              {info}
            </div>
          )}
          {error && (
            <div className="rounded-lg border border-rose-500/40 bg-rose-500/15 px-3 py-2 text-xs text-rose-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading
              ? 'Processando...'
              : mode === 'login'
              ? 'Entrar'
              : mode === 'register'
              ? 'Criar Conta'
              : mode === 'forgot'
              ? 'Enviar Código por E-mail'
              : 'Redefinir Senha'}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          {mode === 'login' && (
            <>
              <button
                type="button"
                onClick={() => {
                  setMode('forgot');
                  setError('');
                  setInfo('');
                }}
                className="text-amber-400 hover:underline"
              >
                Esqueci minha senha
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setError('');
                }}
                className="font-bold text-emerald-400 hover:underline"
              >
                Criar conta
              </button>
            </>
          )}
          {mode !== 'login' && (
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setInfo('');
              }}
              className="font-bold text-emerald-400 hover:underline"
            >
              ← Voltar para Login
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
