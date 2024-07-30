export type IProyecto = {
  id: string;
  nombre: string;
  anio: number;
  portada: string;
  galeria: string[];
  tecnologias: string[];
  descripcionCorta: string;
  descripcionCortaEng: string;
  descripcionLarga: string;
  descripcionLargaEng: string;
  tag: FilterOptions;
  urlRepo: string;
  urlDemo?: string;
}

export type IProyectos = IProyecto[]

export type FilterOptions = "all" | "WebApp" | "Landing Page" | "Portfolio";

export type ITech = {
  id: string;
  name: string;
  imgSrc: string;
  descrip: string;
  engDescrip: string;
  exp: number;
  knowledge: number;
  hoverEffect?: string[];
};

export type ITechs = ITech[]

export interface dataOp {
  projects: IProyectos;
  techs: ITechs;
}

export type DataContextType = {
  projects: dataOp["projects"];
  techs: dataOp["techs"];
};
