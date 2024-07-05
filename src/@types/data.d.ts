export type IProyecto = {
    id: string;
    nombre: string;
    anio: number;
    img: string;
    tecnologias: string[];
    descripcionCorta: string;
    descripcionLarga: string;
    urlRepo: string;
    urlDemo?: string;
}

export type IProyectos = IProyecto[]