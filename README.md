# TalentFlow - Global Solution 2025

Primeiro recorte da plataforma que conecta profissionais, competencias e proposito. O foco deste commit e levantar o esqueleto visual e funcional que sera evoluido nas proximas entregas das disciplinas Front-End Design & Web Development.

## Stack inicial
- Next.js 16 (App Router)
- React 19 com componentes client-side
- Tailwind CSS 3.4 com modo escuro por classe
- Tipagem em TypeScript + JSON local para simular perfis

## Como rodar
1. Clonar este repositorio.
2. Instalar dependencias: `npm install`.
3. Rodar em desenvolvimento: `npm run dev` e acessar `http://localhost:3000`.
4. Build de producao: `npm run build` e, em seguida, `npm start`.

> Usuarios e senhas: nao se aplicam neste estagio.

## Estrutura entregue
- Listagem inicial de profissionais ficticios usando `src/data/profissionais.json` (6 itens para validar fluxo, sera expandido para 60+).
- Cards basicos com nome, cargo, localizacao, area e skills principais.
- Barra de busca + filtros por area, cidade e tecnologia ja funcionais.
- Modal simples com resumo, experiencias, soft skills e botoes "Recomendar profissional" e "Enviar mensagem" disparando acoes (alertas).
- Toggle manual de dark mode para validar diretrizes de acessibilidade.

## Proximos passos sugeridos
1. Completar o JSON com no minimo 60 perfis e ajustar imagens reais quando disponiveis.
2. Aprimorar o modal com formacao, projetos e links clicaveis.
3. Conectar acoes de recomendacao/mensagem com servicos reais ou mocks mais robustos.
4. Implementar paginacao/infinite scroll e area autenticada (caso necessario).

## Links
- Deploy: _(pendente)_
- Repositorio: _(preencher com URL publica quando subir)_

## Integrantes
| Nome | RM |
| --- | --- |
| Integrante 1 | RM563191 |
| Integrante 2 | RM564226 |
| Integrante 3 | RM563290 |

Atualize a tabela acima com os dados oficiais antes da entrega no portal FIAP/Teams.
