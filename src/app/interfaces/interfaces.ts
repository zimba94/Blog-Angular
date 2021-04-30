export interface Usuario {
    id?: number;
    name: string;
    email: string;
    password: string;
    imagen_path?: number;
}

export interface Entrada {
    id?: number;
    titulo: string;
    cuerpo: string;
    slug: string;
    usuario_id: number,
    imagen_path?: number;
}

export interface Imagen {
    id?: number;
    path: string;
}