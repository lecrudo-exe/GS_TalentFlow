import Image from "next/image";
import type { PerfilProfissional } from "@/types/perfil";

type CartaoProfissionalProps = {
  perfil: PerfilProfissional;
  aoSelecionar: (perfil: PerfilProfissional) => void;
};

export function CartaoProfissional({
  perfil,
  aoSelecionar,
}: CartaoProfissionalProps) {
  return (
    <button
      type="button"
      onClick={() => aoSelecionar(perfil)}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={perfil.foto || "/vercel.svg"}
            alt={`Foto de ${perfil.nome}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {perfil.localizacao}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {perfil.nome}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {perfil.cargo}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-primario dark:bg-violet-500/20 dark:text-violet-100">
          {perfil.area}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        {perfil.resumo}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {perfil.habilidadesTecnicas.slice(0, 3).map((habilidade) => (
          <span
            key={habilidade}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            {habilidade}
          </span>
        ))}
      </div>
    </button>
  );
}
