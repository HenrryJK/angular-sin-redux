import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
// import { incrementar , decrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;
  // constructor usando en NGRX //  private store: Store<{contador:number}>
  constructor( private store: Store<AppState>){
      // el select nos permite seleccionar el nodo que nos interesa o queramos
      /*
      this.store.select('contador').subscribe(contador =>{
          console.log(contador);
          // this.contador = state.contador;
      });
      */
      this.store.select('contador').subscribe(contador => this.contador=contador);

    // this.contador = 10;
  }

  incrementar(){
    // en este dispatch declaramos la funcion que se va a ejecutar
    this.store.dispatch( actions.incrementar() );
    //  this.contador ++;
  }

  decrementar(){
   // this.contador --;
   this.store.dispatch( actions.decrementar() );
  }
}
