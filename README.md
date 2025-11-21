# GS_TalentFlow

Projeto frontend: portal de conexão de profissionais (projeto acadêmico / demonstração).

Uma aplicação Next.js com TypeScript e Tailwind CSS que exibe perfis profissionais fictícios, permite busca e filtros, e apresenta detalhes em modal.

**Status:** Protótipo funcional — listagem, filtros, modal e interações simuladas.

**Stack principal:**
- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS**

## Rápido resumo
- Listagem de perfis: `src/data/profissionais.json` contém perfis fictícios.
- Componentes em `src/components` e páginas no diretório `src/app` (Next App Router).
- Dark mode, busca textual, filtros por área/cidade/tecnologia, e modal de perfil implementados.

## Pré-requisitos
- Node.js 18 ou superior
- npm (ou pnpm/yarn se preferir; instruções abaixo usam `npm`)

## Instalação e execução (desenvolvimento)
Abra um terminal (PowerShell) na raiz do projeto e execute:

```powershell
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts úteis
- `npm run dev` : inicia o servidor de desenvolvimento
- `npm run build` : cria build de produção
- `npm start` : inicia a build em modo produção
- `npm run lint` : executa o ESLint

## Estrutura principal do projeto
- `src/app/` : rotas e layouts (Next App Router)
- `src/components/` : componentes reutilizáveis (cards, modais, filtros)
- `src/data/` : dados de exemplo (`profissionais.json`)
- `src/types/` : definições TypeScript (ex.: `perfil.ts`)
- `public/` : assets públicos
- `next.config.ts`, `tailwind.config.js`, `tsconfig.json` : configuração do projeto

## Como contribuir (rápido)
1. Crie uma branch a partir de `main` (ex.: `feature/nome-da-funcao`).
2. Abra um PR descrevendo a mudança.
3. Siga o padrão de código existente e rode `npm run lint` antes de enviar.

## Deploy
O projeto é compatível para deploy em Vercel (Next.js). Para publicar:

1. Conecte o repositório ao Vercel.
2. Configure variáveis de ambiente se necessário (nenhuma exigida neste protótipo).

## Links
- Repositório: `https://github.com/lecrudo-exe/GS_TalentFlow.git`
- Deploy (Vercel): `https://gstalentflow.vercel.app/`
  
## Integrantes
| Nome | RM |
| ---  | -- |
| Pedro Gomes | RM563191 |
| Eric Koigim | RM564226 |
| Guilherme reis | RM563290 |
