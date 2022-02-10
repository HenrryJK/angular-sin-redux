import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

     contador:number;

  /// el store nos permite saber el estado que tengo almacenado alli
  // por lo cual tanto el componente padre se comunica con el componente hijo por medio de este observable y por el store que notifica los cambios que se hagan
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // select nos permite estan pendiente del contador y el susbcribe recibimos el numero
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }


  multiplicar(){
    // this.contador *=2;
    // y agregamos este comando
    //  this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero: 2}));

  }
  dividir(){
   // this.contador/=2;
    // y agregamos este comando
   // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero: 2}));
  }


}
