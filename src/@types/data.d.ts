export type IProyectos = {
    id: string;
    nombre: string;
    anio: number;
    portada: string;
    galeria: string[];
    tecnologias: string[];
    descripcionCorta: string;
    descripcionLarga: string;
    urlRepo: string;
    urlDemo?: string;
}[];

export type ITechs = {
    id: string;
    name: string;
    imgSrc: string;
    descrip: string;
    engDescrip: string;
    exp: number;
    knowledge: number;
    hoverEffect?: string[];
}[];
