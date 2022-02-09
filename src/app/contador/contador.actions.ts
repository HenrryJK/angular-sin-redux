// aqui declaramos las acciones que con constantes que expoertamos
import { createAction } from "@ngrx/store";

// creamos unas acciones                  nombre de la accion
export const incrementar = createAction('[Contador] Incrementar');

export const decrementar = createAction('[Contador] Decrementar');
