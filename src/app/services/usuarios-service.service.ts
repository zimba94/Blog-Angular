import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  token: string;
  usuario: Usuario = {
    name: "Alan Mejía Original",
    email: "alan@gmail.com",
    password: "123",
  };

  constructor(private router: Router, private http: HttpClient) { }



  login(email: string, password: string){

    if (email === this.usuario.email && password === this.usuario.password) {
      this.token = "miToken"
      localStorage.setItem('token', this.token);
      return true;
    } else {
      this.token = "";
      localStorage.setItem('token', this.token);
      return false;
    }

  }

  singup(usuario: Usuario){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset = utf-8'
      })
    };

    //Servicio singup
    this.usuario = usuario;
    this.token = "miToken"
    localStorage.setItem('token', this.token);
    console.log("singup");
    console.log(usuario);

    return this.http.post(`${baseUrl}/entrada/store`, usuario, httpOptions);

  }

  logout(){

    this.token = "";
    localStorage.clear();

  }

  async validaToken(): Promise<boolean>{
    await this.cargarToken();
    if (!this.token || this.token === "") {
      this.router.navigateByUrl('/login');
      return Promise.resolve(false);
    }else{
      return Promise.resolve(true);
    }
  }

  async cargarToken(){  
    this.token = await localStorage.getItem('token') || null;  
  }
}
