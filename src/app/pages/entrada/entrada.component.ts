import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  slug: string;
  options = {
    placeholderText: "Escribe...",
    key: "your_license_key"
  };
  editorContent = "Inserted content";


  constructor(private activatedRoute : ActivatedRoute) { 
    const {slug} = this.activatedRoute.snapshot.params;
    console.log(slug);
    this.slug = slug;
  }

  ngOnInit(): void {
   
  }

  guardar(){
    console.log("Guardar");
  }
  
}
