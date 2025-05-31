import { Juego } from "./juego.interface";

export interface Estadisticas {
    juegoTotal: number;
    juegosGratis: number;
    juegosdePago: number;
    mejorRating: Juego;
    promPrecio: number;
}