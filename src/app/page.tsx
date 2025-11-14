"use client";

import { useMemo, useState } from "react";
import { BarraFiltros } from "@/components/barra-filtros";
import { CartaoProfissional } from "@/components/cartao-profissional";
import { ModalPerfil } from "@/components/modal-perfil";
import profissionaisCadastro from "@/data/profissionais.json";
import type { PerfilProfissional } from "@/types/perfil";

const profissionais: PerfilProfissional[] = profissionaisCadastro;
const ordenarOpcoes = (valores: string[]) =>
  Array.from(new Set(valores)).sort((a, b) => a.localeCompare(b));

export default function Home() {
  const [busca, setBusca] = useState("");
  const [filtroArea, setFiltroArea] = useState("todos");
  const [filtroCidade, setFiltroCidade] = useState("todas");
  const [filtroTecnologia, setFiltroTecnologia] = useState("todas");
  const [modoEscuro, setModoEscuro] = useState(false);
  const [perfilAtivo, setPerfilAtivo] = useState<PerfilProfissional | null>(null);

  const opcoesArea = useMemo(
    () => ["todos", ...ordenarOpcoes(profissionais.map((perfil) => perfil.area))],
    []
  );

  const opcoesCidade = useMemo(
    () => ["todas", ...ordenarOpcoes(profissionais.map((perfil) => perfil.localizacao))],
    []
  );

  const opcoesTecnologia = useMemo(
    () => ["todas", ...ordenarOpcoes(profissionais.flatMap((perfil) => perfil.habilidadesTecnicas))],
    []
  );

  const profissionaisFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return profissionais.filter((perfil) => {
      const atendeBusca =
        termo.length === 0 ||
        perfil.nome.toLowerCase().includes(termo) ||
        perfil.resumo.toLowerCase().includes(termo);
      const atendeArea = filtroArea === "todos" || perfil.area === filtroArea;
      const atendeCidade = filtroCidade === "todas" || perfil.localizacao === filtroCidade;
      const atendeTecnologia =
        filtroTecnologia === "todas" ||
        perfil.habilidadesTecnicas.some(
          (habilidade) => habilidade.toLowerCase() === filtroTecnologia.toLowerCase()
        );

      return atendeBusca && atendeArea && atendeCidade && atendeTecnologia;
    });
  }, [busca, filtroArea, filtroCidade, filtroTecnologia]);

  const recomendarProfissional = (perfil: PerfilProfissional) => {
    alert(`Recomendacao enviada para ${perfil.nome}`);
    setPerfilAtivo(null);
  };

  const enviarMensagem = (perfil: PerfilProfissional) => {
    alert(`Mensagem iniciada com ${perfil.nome}`);
    setPerfilAtivo(null);
  };

  return (
    <div className={modoEscuro ? "dark" : ""}>
      <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 text-slate-900 transition dark:bg-escuro dark:text-white sm:px-8">
        <header className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primario">
              Global Solution 2025
            </p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              TalentFlow em construcao
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Comecamos com alguns perfis ficticios para validar filtros, modal e interacoes.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setModoEscuro((valor) => !valor)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primario hover:text-primario dark:border-slate-700 dark:text-slate-100"
          >
            {modoEscuro ? "Voltar para claro" : "Ativar dark mode"}
            <span
              className={`h-2 w-2 rounded-full ${modoEscuro ? "bg-yellow-300" : "bg-slate-900"}`}
            ></span>
          </button>
        </header>

        <section className="mt-6 space-y-4">
          <BarraFiltros
            busca={busca}
            aoAlterarBusca={setBusca}
            filtroArea={filtroArea}
            aoAlterarArea={setFiltroArea}
            filtroCidade={filtroCidade}
            aoAlterarCidade={setFiltroCidade}
            filtroTecnologia={filtroTecnologia}
            aoAlterarTecnologia={setFiltroTecnologia}
            opcoesArea={opcoesArea}
            opcoesCidade={opcoesCidade}
            opcoesTecnologia={opcoesTecnologia}
          />

          <p className="text-sm text-slate-600 dark:text-slate-300">
            {profissionaisFiltrados.length} profissionais encontrados
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {profissionaisFiltrados.map((perfil) => (
              <CartaoProfissional
                key={perfil.id}
                perfil={perfil}
                aoSelecionar={setPerfilAtivo}
              />
            ))}
          </div>

          {profissionaisFiltrados.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              Sem resultados com estes filtros. Ajuste os campos e tente de novo.
            </div>
          ) : null}
        </section>
      </main>

      {perfilAtivo ? (
        <ModalPerfil
          perfil={perfilAtivo}
          aoFechar={() => setPerfilAtivo(null)}
          aoRecomendar={recomendarProfissional}
          aoMensagem={enviarMensagem}
        />
      ) : null}
    </div>
  );
}
