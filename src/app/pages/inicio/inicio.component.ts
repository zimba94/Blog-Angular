import { Component, HostListener, OnInit } from '@angular/core';
import { Entrada } from '../../interfaces/interfaces';
import { EntradasServiceService } from '../../services/entradas-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @HostListener ('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if (pos>max) {

      if (this.entradasService.cargando) { return; }

      // this.entradasService.getEntradas().subscribe( resp => {
      //   this.entradas.push(...resp);
      // });

    }
  }

  entradas: Entrada [] = [
    {
      id: 1,
      titulo: "Titulo 1",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo1",
      imagen_path: 1
    },
    {
      id: 2,
      titulo: "Titulo 2",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo2",
      imagen_path: 1
    },
    {
      id: 3,
      titulo: "Titulo 3",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo3",
      imagen_path: 1
    },
    {
      id: 4,
      titulo: "Titulo 4",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo4",
      imagen_path: 1
    },
    {
      id: 5,
      titulo: "Titulo 5",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo5",
      imagen_path: 1
    }

  ];
  loading:boolean; 
  error:boolean;
  msjError : string;

  constructor(private entradasService: EntradasServiceService) {
    this.cargarEntradas();
   }

  ngOnInit(): void {
    
  }

  loadData(event){
    this.cargarEntradas(event);
  }

  cargarEntradas(event?){
    console.log("Cargar Entradas");
    this.entradasService.getEntradas()
        .subscribe(resp => {
          console.log("resp");
          console.log(resp);
          // if (resp.length === 0) {
          //   event.target.disabled = true;
          //   event.target.complete();
          //   return;
          // }

          // this.entradas.push(...resp);
          // console.log(this.entradas);
          // if (event) {
          //   event.target.complete();
          // }
    });
  }

  ngOnDestroy(): void {
    this.entradasService.resetPage();
  }

  agregar(){
    this.entradas.push( {
      id: 1,
      titulo: "Titulo Nuevo",
      cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel veniam consequuntur numquam aut impedit commodi ab accusamus consectetur nemo expedita recusandae nobis earum dignissimos tempore natus nam obcaecati culpa.",
      usuario_id: 1,
      slug: "alan-titulo",
      imagen_path: 1
    });
  }

  borrarEntrada(e){
    this.entradas = e;
  }

}
