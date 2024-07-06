export type IProyectos = {
    id: string;
    nombre: string;
    anio: number;
    img: string;
    tecnologias: string[];
    descripcionCorta: string;
    descripcionLarga: string;
    urlRepo: string;
    urlDemo?: string;
}[];