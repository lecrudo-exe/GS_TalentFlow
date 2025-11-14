type BarraFiltrosProps = {
  busca: string;
  aoAlterarBusca: (valor: string) => void;
  filtroArea: string;
  aoAlterarArea: (valor: string) => void;
  filtroCidade: string;
  aoAlterarCidade: (valor: string) => void;
  filtroTecnologia: string;
  aoAlterarTecnologia: (valor: string) => void;
  opcoesArea: string[];
  opcoesCidade: string[];
  opcoesTecnologia: string[];
};

export function BarraFiltros({
  busca,
  aoAlterarBusca,
  filtroArea,
  aoAlterarArea,
  filtroCidade,
  aoAlterarCidade,
  filtroTecnologia,
  aoAlterarTecnologia,
  opcoesArea,
  opcoesCidade,
  opcoesTecnologia,
}: BarraFiltrosProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="text-sm font-semibold text-slate-600 dark:text-slate-200">
          Busca
          <input
            type="text"
            value={busca}
            onChange={(evento) => aoAlterarBusca(evento.target.value)}
            placeholder="Nome ou palavra-chave"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-primario focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </label>
        <label className="text-sm font-semibold text-slate-600 dark:text-slate-200">
          Area
          <select
            value={filtroArea}
            onChange={(evento) => aoAlterarArea(evento.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-primario focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {opcoesArea.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao === "todos" ? "Todas as areas" : opcao}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-600 dark:text-slate-200">
          Cidade
          <select
            value={filtroCidade}
            onChange={(evento) => aoAlterarCidade(evento.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-primario focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {opcoesCidade.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao === "todas" ? "Todas as cidades" : opcao}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-600 dark:text-slate-200">
          Tecnologia
          <select
            value={filtroTecnologia}
            onChange={(evento) => aoAlterarTecnologia(evento.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-primario focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {opcoesTecnologia.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao === "todas" ? "Todas as tecnologias" : opcao}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
