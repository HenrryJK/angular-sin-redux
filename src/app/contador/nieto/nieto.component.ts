import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input() contador: number;
  // es para que el cambio se vea refleado tanto en clase padre como hijo , los cambios que realice la clase nieto.
  @Output() contadorCambio = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0;
    this.contadorCambio.emit(0);
  }
}
