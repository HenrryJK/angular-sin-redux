// Es quien va a recibir las acciones de la clase contador.actions.ts
import { createReducer, on } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";
/// dentro de esta funcion recibe el estado inicial
/*export function contadorReducer(state:number = 10, action: Action) {
  // el reducer no puede hacer peticiones al exterior
    switch (action.type) {
      case incrementar.type:
        // state++; puede ser tambien pero en este se quiere manejar de esta forma
          return state+1;

          case decrementar.type:
            return state-1;
      default:
        return state
    }
}
*/

// estado inicial del estado
export const initialState = 20;
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(reset, state => initialState),
  // on(multiplicar, (state,props) => state * props.numero),
  on(multiplicar, (state,{numero}) => state *numero),
  // dividir
  on(dividir, (state,{numero}) => state / numero)
);

// contadorReducer es la funcion que estoy exponiendo a fuera , y el _contadorReducer es lo que has implementado el createReducer
// funcion que llama o usa el _contadorReducer segun el ngrx
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}

