import type { PerfilProfissional } from "@/types/perfil";

type ModalPerfilProps = {
  perfil: PerfilProfissional;
  aoFechar: () => void;
  aoRecomendar: (perfil: PerfilProfissional) => void;
  aoMensagem: (perfil: PerfilProfissional) => void;
};

export function ModalPerfil({
  perfil,
  aoFechar,
  aoRecomendar,
  aoMensagem,
}: ModalPerfilProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-10">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {perfil.localizacao}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {perfil.nome}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {perfil.cargo}
            </p>
          </div>
          <button
            onClick={aoFechar}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200"
          >
            Fechar
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{perfil.resumo}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-200">
              Experiencias recentes
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {perfil.experiencias.map((experiencia) => (
                <li key={`${experiencia.empresa}-${experiencia.cargo}`}>
                  <p className="font-semibold">{experiencia.empresa}</p>
                  <p>{experiencia.cargo}</p>
                  <p className="text-xs text-slate-500">
                    {experiencia.inicio} - {experiencia.fim || "Atual"}
                  </p>
                  <p className="text-xs">{experiencia.descricao}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-200">
              Formacao e estudos
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {perfil.formacao.map((formacao) => (
                <li key={`${formacao.curso}-${formacao.instituicao}`}>
                  <p className="font-semibold">{formacao.curso}</p>
                  <p>{formacao.instituicao}</p>
                  <p className="text-xs text-slate-500">Concluido em {formacao.ano}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-200">
              Soft skills e interesses
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {perfil.softSkills.map((soft) => (
                <span
                  key={soft}
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-100"
                >
                  {soft}
                </span>
              ))}
            </div>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-200">
              Hobbies e interesses
            </h4>
            <ul className="mt-2 list-disc pl-4 text-sm text-slate-700 dark:text-slate-200">
              {perfil.areaInteresses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => aoRecomendar(perfil)}
            className="flex-1 rounded-full bg-primario px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Recomendar profissional
          </button>
          <button
            onClick={() => aoMensagem(perfil)}
            className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primario hover:text-primario dark:border-slate-600 dark:text-slate-100"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
