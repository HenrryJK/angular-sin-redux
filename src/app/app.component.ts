import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { incrementar , decrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';

interface AppState{
  contador : number;
}


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

      this.store.subscribe(state =>{
          console.log(state);
          this.contador = state.contador;
      });


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
