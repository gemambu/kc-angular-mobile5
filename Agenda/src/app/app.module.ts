import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { OrdenContactosPipe } from './orden-contactos.pipe'

@NgModule({
  // Por ahora sólo tenemos un componente, Aquí debemos indicar los componentes,
  // directivas y pipes que generemos en nuestra app
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    OrdenContactosPipe
  ],
  // En imports indicamos modulos de los cuales dependemos
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // En providers indicamos los proveedores de todas aquellas piezas
  // que sean susceptibles de ser inyectadas como dependencias
  providers: [
    ContactosService
  ],
  // En bootstrap indicamos el componente raíz, que es el primero
  // que se instanciará y hará lo propio con el resto
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
