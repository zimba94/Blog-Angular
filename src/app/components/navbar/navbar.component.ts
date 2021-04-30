import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  nombre: string;
  
  constructor(private router: Router, private usuarioService: UsuariosServiceService) { }

  ngOnInit(): void {
    this.nombre = this.usuarioService.usuario.name;
  }

  logout(){
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
