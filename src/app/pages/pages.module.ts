import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SingupComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';



@NgModule({
  declarations: [LoginComponent, InicioComponent, EntradaComponent, SingupComponent],
  imports: [
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ]
})
export class PagesModule { }
