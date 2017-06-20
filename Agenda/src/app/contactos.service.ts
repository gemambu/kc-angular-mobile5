import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'. Este decorador 
// no necesita que le indiquemos ningún metadato. Es importante
// que no nos olvidemos de añadir el servicio en la colección de 'providers'
// del módulo de nuestra aplicación
@Injectable()
export class ContactosService {

  private _contactos : Contacto[];

  constructor(){
    this._contactos = [
      new Contacto('Tim', 'Cook'),
      new Contacto('Bill','Gates'),
      new Contacto('Elon','Musk'),
      new Contacto('Steve','Wozniak'),
      new Contacto('Sundar','Pichai')
    ];
  }

  obtenerContactos(): Contacto[]{
    return this._contactos;  
  };

  agregarContacto(contacto: Contacto): void {
    this._contactos.push(contacto);
  }

  eliminarContacto(contacto: Contacto): void {
    // version facil. obtengo position y elimino esa posicion
    //let position = this._contactos.indexOf(contacto);
    //this._contactos.splice(position, 1);
  }
}
