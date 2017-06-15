import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Por ahora sólo tenemos un componente, Aquí debemos indicar los componentes,
  // directivas y pipes que generemos en nuestra app
  declarations: [
    AppComponent
  ],
  // En imports indicamos modulos de los cuales dependemos
  imports: [
    BrowserModule
  ],
  // En providers indicamos los proveedores de todas aquellas piezas
  // que sean susceptibles de ser inyectadas como dependencias
  providers: [],
  // En bootstrap indicamos el componente raíz, que es el primero
  // que se instanciará y hará lo propio con el resto
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
