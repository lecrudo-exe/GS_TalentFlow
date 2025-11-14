export interface Experiencia {
  empresa: string;
  cargo: string;
  inicio: string;
  fim: string;
  descricao: string;
}

export interface Formacao {
  curso: string;
  instituicao: string;
  ano: number;
}

export interface Projeto {
  titulo: string;
  link: string;
  descricao: string;
}

export interface Idioma {
  idioma: string;
  nivel: string;
}

export interface PerfilProfissional {
  id: number;
  nome: string;
  foto: string;
  cargo: string;
  resumo: string;
  localizacao: string;
  area: string;
  habilidadesTecnicas: string[];
  softSkills: string[];
  experiencias: Experiencia[];
  formacao: Formacao[];
  projetos: Projeto[];
  certificacoes: string[];
  idiomas: Idioma[];
  areaInteresses: string[];
}
