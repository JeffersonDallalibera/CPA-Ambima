import { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Mail, User, KeyRound, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function LoginPage({ onSuccess, onSkip }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'forgot' | 'reset'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setAlias] = useState('');
  const [goal, setGoal] = useState('Aprovação Rápida (Sprint)');
  const [selectedModules, setSelectedModules] = useState([2, 3]);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  useEffect(() => {
    if (!googleClientId || document.getElementById('google-gsi-script')) return;
    const script = document.createElement('script');
    script.id = 'google-gsi-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [googleClientId]);

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
          onSuccess(data.user);
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
      const isOwner = email.toLowerCase().includes('jeffersonmigueldallalibera');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          alias,
          plan: isOwner ? 'unlimited' : 'custom',
          allowedModules: isOwner ? [1, 2, 3, 4] : selectedModules,
          needsProfile: { goal },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Falha na autenticação.');
        return;
      }
      localStorage.setItem('cpa_jwt_token', data.token);
      localStorage.setItem('cpa_jwt_user', JSON.stringify(data.user));
      onSuccess(data.user);
    } catch {
      setError('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 py-10 text-ink">
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-7 shadow-card">
        {/* Brand Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-sm">
            CPA
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-ink">
              {mode === 'login' && 'Entrar na Plataforma'}
              {mode === 'register' && 'Criar Conta Segura'}
              {mode === 'forgot' && 'Recuperar Senha'}
              {mode === 'reset' && 'Definir Nova Senha'}
            </h1>
            <p className="text-xs text-ink-3">
              ANBIMA CPA • Autenticação JWT & Anonimização LGPD
            </p>
          </div>
        </div>

        {(mode === 'login' || mode === 'register') && (
          <>
            <button
              type="button"
              onClick={handleGoogleClick}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface text-sm font-medium text-ink shadow-card transition hover:bg-subtle"
            >
              <span className="font-bold text-brand">G</span> Continuar com Google
            </button>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-line" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-ink-3">
                ou com e-mail
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-2">Apelido</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-ink-3" />
                  <input
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    placeholder="Ex: Candidato CPA"
                    className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-ink outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-line bg-subtle p-3.5 space-y-2.5">
                <div className="text-xs font-semibold text-ink">
                  Suas Necessidades & Módulos (Plano Sob Medida)
                </div>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="h-9 w-full rounded-lg border border-line bg-surface px-2.5 text-xs text-ink outline-none focus:border-brand"
                >
                  <option>Aprovação Rápida (Sprint)</option>
                  <option>Formação Completa CPA</option>
                  <option>Uso Corporativo / Equipe</option>
                </select>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    { id: 1, name: 'M1: SFN & Economia' },
                    { id: 2, name: 'M2: Produtos (40%)' },
                    { id: 3, name: 'M3: Ética & Cliente (30%)' },
                    { id: 4, name: 'M4: Inovação & IA' },
                  ].map((m) => {
                    const checked = selectedModules.includes(m.id);
                    return (
                      <label
                        key={m.id}
                        className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 ${
                          checked ? 'border-brand bg-brand/10 text-ink' : 'border-line bg-surface text-ink-3'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            setSelectedModules((prev) =>
                              prev.includes(m.id) ? prev.filter((x) => x !== m.id) : [...prev, m.id]
                            )
                          }
                          className="accent-brand"
                        />
                        <span className="truncate">{m.name}</span>
                      </label>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-[11px] font-medium text-ink-2">
                  <span>
                    {email.toLowerCase().includes('jeffersonmigueldallalibera')
                      ? '👑 Conta Proprietário: Acesso Ilimitado'
                      : `Plano selecionado: ${selectedModules.length} módulo(s)`}
                  </span>
                  <span className="font-mono font-bold text-brand">
                    {email.toLowerCase().includes('jeffersonmigueldallalibera')
                      ? 'ILIMITADO'
                      : `R$ ${selectedModules.length * 49}/mês`}
                  </span>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-2">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-ink-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@gmail.com"
                className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
          </div>

          {(mode === 'login' || mode === 'register') && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-ink-3" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-ink outline-none focus:border-brand"
                />
              </div>
            </div>
          )}

          {mode === 'reset' && (
            <>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-2">
                  Código de 6 dígitos
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-ink-3" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="000000"
                    className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 font-mono text-sm text-ink outline-none focus:border-brand"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-2">Nova Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-ink-3" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-ink outline-none focus:border-brand"
                  />
                </div>
              </div>
            </>
          )}

          {info && (
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-700">
              {info}
            </div>
          )}
          {error && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-700">
              {error}
            </div>
          )}

          <Button type="submit" variant="primary" disabled={loading} className="h-10 w-full justify-center">
            {loading
              ? 'Processando...'
              : mode === 'login'
              ? 'Entrar e ir para Visão Geral'
              : mode === 'register'
              ? 'Criar Conta Anonimizada'
              : mode === 'forgot'
              ? 'Enviar Código por E-mail'
              : 'Redefinir Senha'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-3">
          {mode === 'login' ? (
            <>
              <button
                type="button"
                onClick={() => {
                  setMode('forgot');
                  setError('');
                  setInfo('');
                }}
                className="font-medium text-ink-2 hover:text-brand hover:underline"
              >
                Esqueci minha senha
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setError('');
                }}
                className="font-semibold text-brand hover:underline"
              >
                Criar conta
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setInfo('');
              }}
              className="font-semibold text-brand hover:underline"
            >
              ← Voltar para Login
            </button>
          )}
        </div>

        <div className="mt-6 border-t border-line pt-4 text-center">
          <button
            type="button"
            onClick={onSkip}
            className="text-xs font-medium text-ink-3 hover:text-ink"
          >
            Continuar sem login (Modo Local) →
          </button>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-[11px] text-ink-3">
        <ShieldCheck className="h-3.5 w-3.5 text-brand" />
        Seus dados de dificuldade por módulo são gravados com e-mail anonimizado (SHA-256).
      </p>
    </div>
  );
}
