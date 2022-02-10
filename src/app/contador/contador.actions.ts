// aqui declaramos las acciones que con constantes que expoertamos
import { createAction, props } from "@ngrx/store";

// creamos unas acciones                  nombre de la accion
export const incrementar = createAction('[Contador] Incrementar');

export const decrementar = createAction('[Contador] Decrementar');

export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{numero:number}>()
  );

export const dividir = createAction(
  '[Contador] Dividir',
  props<{numero:number}>()
  );
