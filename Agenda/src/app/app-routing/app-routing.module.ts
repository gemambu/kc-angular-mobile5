import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisContactosComponent } from '../mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component';

// definimos las rutas de la aplicacion. Cada una de ellas tiene una 
// propiedad path  que es donde indicamos la ruta a navegar y una
// propiedad component que es el componente que responde de la ruta.
const routes: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  },
  {
    path: '**', // este path significa cualquier cosa. OJO! poner siempre la última
    pathMatch: 'full',
    redirectTo: '/mis-contactos'
  }
];

// con RouterModule.forRoot registramos rutas en el modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
