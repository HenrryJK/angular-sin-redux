import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  // este imput nos va a resivir el contador de la clase padre (componente padre)
  @Input() contador:number;

  // esto se hizo para que el cambio se vea reflejado en la clase padre , de esa forma se comuniquen tanto el "hijo con el padre"
  @Output() cambioContador = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


  multiplicar(){
    this.contador *=2;
    // y agregamos este comando
      this.cambioContador.emit(this.contador);

  }
  dividir(){
    this.contador/=2;
    // y agregamos este comando
    this.cambioContador.emit(this.contador);
  }

  /// solucion.
  resetNieto(nuevoContador){
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }
}
