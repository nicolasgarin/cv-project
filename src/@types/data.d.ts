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
