import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';
import { Observable } from 'rxjs/Observable';

@Component({ 
  // En selector indicamos el elemento HTML donde se instanciará 
  // este componente
  selector: 'app-root',
  // en template indicamosla ruta al template del componente. Podríamos
  // escribirlo inline en la propiedad template
  templateUrl: './app.component.html',
  //template:"<h1>Hola keepcoders!</h1>"
  //en styleUrls indicamos las rutas de los documentos CSS que
  // contienen los estilos que afectan a este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactos: Observable<Contacto[]>;

// para hacer una inyección de dependencias necesitamos sí o si 
// hacerlo en el constructor de una clase. Tenemos que
// indicar un parámetro con un modificador de acceso (obligatorio). Además tenemos que anotar su tipo que
// no es otro que el servicio a inyectar.
  constructor(private _contactosService: ContactosService){
    
  }

  ngOnInit() : void{
    // en el hook 'OnInit' inicializamos los datos del componente
    this.contactos = this._contactosService.obtenerContactos();
    
  }
  
  eliminarContacto(contacto: Contacto){
    this._contactosService.eliminarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }

  guardarContacto(contacto: Contacto){
    this._contactosService.agregarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }

}
