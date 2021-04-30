import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../../services/usuarios-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  
  form: FormGroup;

  singupUsuario: Usuario = {
    name: "Alan Mejía",
    email: "alan@gmail.com",
    password: "123",
  };

  constructor(private usuarioService: UsuariosServiceService, private router: Router, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    this.form = this.formBuilder.group({
      nombre   : ['Alan Mejia', [Validators.required]],
      email    : ['alan@gmail.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password : ['123', [Validators.required]]
    });
  }

  singup(){

    if (this.form.invalid) {
      Object.values( this.form.controls).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }
    this.singupUsuario.name = this.form.value.nombre;
    this.singupUsuario.email = this.form.value.email;
    this.singupUsuario.password = this.form.value.password;

    const valido = this.usuarioService.singup(this.singupUsuario);
    if (valido) {
      this.router.navigateByUrl('/inicio');
    }else{
      alert("Usuario o contraseña incorrectos");
    }

    
  }
}
