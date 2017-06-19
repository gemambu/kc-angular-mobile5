import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'agenda-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent  {

  // Con el decorador input exponemos atributos para que puedan
  // enlazar datos desde otros componentes
  @Input() datos: string[];

  // Con el decorador output, exponemos eventos a otros componentes. Es necesario, además que el atributo decorado sea de tipo 'EventEmitter<T>' 
  @Output() clickEnEliminar = new EventEmitter<string>();
  
  // manejador del click de cada uno de los botones
  notificarEliminacion(contactoABorrar: string): void {
    // notificamos al padre que se desea eliminar un contacto. nosotros somos el hijo, no hacemos eso
    this.clickEnEliminar.emit(contactoABorrar);
  }


}
