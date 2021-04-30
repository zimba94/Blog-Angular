import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from '../../interfaces/interfaces';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  @Input() entradas: Entrada[] = [];
  @Output() entradasEvent = new EventEmitter<Entrada[]>();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  abrirEntrada(entrada){

  }
  editarEntrada(entrada: Entrada){
    this.router.navigate(['/entrada', entrada.slug ]);
  }

  borrar(entradasAct: Entrada[]) {
    console.log("Borrar2")
    this.entradasEvent.emit(entradasAct);
  }

  borrarEntrada(id){
    console.log(this.entradas);
    this.entradas = this.entradas.filter(entrada => entrada.id != id);
    console.log(this.entradas);
    this.borrar(this.entradas);
    console.log("Borra entrada: ", id );
  }

}
