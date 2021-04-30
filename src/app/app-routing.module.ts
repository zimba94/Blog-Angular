import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'entrada/:slug',
    component: EntradaComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
