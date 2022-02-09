// Es quien va a recibir las acciones de la clase contador.actions.ts

import { Action } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";
/// dentro de esta funcion recibe el estado inicial
export function contadorReducer(state:number = 10, action: Action) {
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

