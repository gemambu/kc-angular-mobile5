import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Un servicio es una clase decorada con 'Injectable'. Este decorador 
// no necesita que le indiquemos ningún metadato. Es importante
// que no nos olvidemos de añadir el servicio en la colección de 'providers'
// del módulo de nuestra aplicación
@Injectable()
export class ContactosService {

  private _contactos : Contacto[];

  constructor(private _http: Http){

    this._contactos = [
      new Contacto('Tim', 'Cook'),
      new Contacto('Bill','Gates'),
      new Contacto('Elon','Musk'),
      new Contacto('Steve','Wozniak'),
      new Contacto('Sundar','Pichai')
    ];
  }

  obtenerContactos(): Observable<Contacto[]>{
    // hacemos la petición http
    return this._http
                .get('http://localhost:3004/contactos')
                .map((respuesta: Response) => {
                  
                  let contactos: Contacto[];
                  let contactosJson: any[] = respuesta.json();
                  
                  contactosJson.forEach((contactoJson: any) => {
                    contactos.push(new Contacto(contactoJson.nombre));
                  });

                  return contactos;
                });
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
