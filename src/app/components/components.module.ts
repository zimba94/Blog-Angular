import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EntradasComponent } from './entradas/entradas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, EntradasComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent, 
    EntradasComponent
  ]
})
export class ComponentsModule { }
