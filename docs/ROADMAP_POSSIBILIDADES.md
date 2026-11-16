# Roadmap: possibilidades de evolução

Plataforma de estudos para as certificações ANBIMA CPA-10 e CPA-20.
Este documento reúne as melhorias possíveis. Não é um compromisso de escopo.

## Estado atual

- Frontend reescrito (React 19, Vite, Tailwind 4) com 6 telas: Dashboard, Simulados, Banco de questões, Mapas, Estudo e Flashcards.
- Seletor CPA-10 / CPA-20. A estrutura do CPA-10 é **provisória** (pesos, tempo e corte não verificados) e o conteúdo é o mesmo do CPA-20.
- Repetição espaçada (SM-2 simplificado) em flashcards e questões, com revisão do dia.
- Modos de simulado: revisão devida, adaptativo e Pareto dinâmico.
- Análise de erros por motivo, data da prova e plano de estudo até ela.
- Ferramentas: paleta Ctrl+K, calculadora HP 12C e Pomodoro.
- Certificação, SRS, erros e data da prova ficam **apenas no `localStorage`**. O backend (`backend/app.py`) não tem suporte a eles.

## 1. Conteúdo

| Item | Descrição |
|---|---|
| Edital oficial do CPA-10 | Validar pesos por módulo, tempo e nota de corte; remover o selo "provisório". |
| Banco próprio do CPA-10 | Hoje reaproveita o conteúdo do CPA-20. |
| Mais questões e flashcards | A qualidade da repetição espaçada depende do volume. |
| Comentário por alternativa | Explicar por que cada alternativa errada está errada. |
| Cartão de fórmulas | Consulta rápida de fórmulas de matemática financeira e estatística. |
| Resumo da legislação | Normas CMN, CVM e ANBIMA, com link para a fonte. |
| Glossário | Termos do mercado financeiro, com busca. |
| Questões inéditas por módulo | Cobertura uniforme dos tópicos do programa. |
| Controle de versão do edital | Registrar a data e a versão do programa em uso. |

## 2. Backend e persistência

| Item | Descrição |
|---|---|
| Dados no servidor | Persistir certificação, SRS, erros e data da prova fora do `localStorage`. |
| Contas e login | Sincronizar entre dispositivos. |
| Histórico de simulados | Guardar notas e respostas ao longo do tempo. |
| API de estatísticas | Agregados por módulo, por período e por motivo de erro. |
| Migrações de banco | Versionar o esquema do PostgreSQL. |
| Rate limit e validação | Proteger a API pública. |
| Backup automatizado | Já existem backups portáteis; automatizar a rotina. |

## 3. Estudo e motivação

| Item | Descrição |
|---|---|
| Metas diárias | Meta de questões e cartões por dia. |
| Sequência de dias (streak) | Reforço de constância. |
| Gráfico de evolução | Nota por simulado e por módulo ao longo do tempo. |
| Previsão de aprovação | Estimativa com base no desempenho recente. |
| Anotações e favoritos | Marcar questões para rever e anotar dúvidas. |
| Modo foco | Pomodoro ligado ao plano do dia. |
| Revisão de véspera | Roteiro curto para os últimos dias antes da prova. |
| Conquistas | Marcos de progresso (opcional). |
| Lembretes | E-mail ou notificação para a revisão do dia. |

## 4. Experiência de uso

| Item | Descrição |
|---|---|
| PWA e uso offline | Instalar no celular e estudar sem internet. |
| Tema escuro | Alternância de tema com preferência salva. |
| Acessibilidade | Navegação completa por teclado, contraste e `aria` revisados. |
| Exportar e importar progresso | Backup em JSON, solução rápida contra perda de dados. |
| Internacionalização | Estrutura para novos idiomas, se necessário. |
| Onboarding | Tour inicial e escolha guiada de certificação e data da prova. |

## 5. Qualidade e entrega

| Item | Descrição |
|---|---|
| Testes unitários | Cobrir `lib/srs.js`, `lib/certifications.js` e `features/simulados/modes.js`. |
| Testes E2E | Fluxos principais: simulado, flashcards, troca de certificação. |
| CI no GitHub Actions | Lint e build a cada push e pull request. |
| Deploy | Frontend estático e backend com banco gerenciado. |
| Observabilidade | Logs estruturados e monitoramento de erros. |
| Análise de uso | Medir quais telas e modos são usados. |
| Política de privacidade | Necessária ao armazenar dados de contas. |

## Ordem sugerida

1. Validar o edital do CPA-10 e ampliar o conteúdo.
2. Exportar e importar progresso.
3. Testes automatizados e CI.
4. Gráficos de evolução e metas diárias.
5. Backend com contas e sincronização.
6. PWA e deploy.

## Riscos e restrições

- O conteúdo do CPA-10 só é confiável após a validação com o edital oficial.
- Sem backend, o progresso se perde ao limpar o cache do navegador.
- Mudanças em `backend/app.py` exigem revisão de compatibilidade com o frontend.
