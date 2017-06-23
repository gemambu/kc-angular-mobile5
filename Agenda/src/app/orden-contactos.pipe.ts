import { Pipe, PipeTransform } from '@angular/core';
import { Contacto} from './contacto';

// Un pipe es una clase decorada con 'pipe'. Es necesario que indiquemos
// el metadato 'name' para poder nombrar al pipe (es su identificador) y se
// usará en los templates para usarlo. Un pipe tiene que implementar siempre
// la ifaz PipeTransform, que a su vez nos obliga a implementar la funcion
// 'transform'
@Pipe({
  name: 'ordenContactos'
})
export class OrdenContactosPipe implements PipeTransform {

  // En transform siempre vendrá dado al menos un parametro: es el dato
  // que va a sufrir la transfornmacion
  transform(contactos: Contacto[]): Contacto[] {

    let ordenados: Contacto[];
    
    // Si la coleccion de contactos tiene valores
    if(contactos){

      // la ordenamo indicand una funcion de ordenacion
      ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {
          let resultado: number;

          // Si el nombre del contacto A es myor que el nombre del contacto B, significa
          // que la ordenacion A-Z es correct, y por tanto como resultado de la comparación
          // retornamos 1
          if (contactoA.nombre.toLowerCase() > contactoB.nombre.toLowerCase()) {
            resultado = 1;

          // Si el nombre del contacto A es menor que el nombre del contacto B, significa
          // que la ordenacion A-Z es incorrecta, y por tanto como resultado de la comparación
          // retornamos -1
          } else if (contactoA.nombre.toLowerCase() < contactoB.nombre.toLowerCase()){
              resultado = -1;

          // Si el nombre del contacto A es igual que el nombre del contacto B, significa
          // que la ordenacion A-Z es correcta, y por tanto como resultado de la comparación
          // retornamos 0
          } else {
            resultado = 0;
          }

          return resultado;
      });
    } else {
      // devolvemos una colección vacia si contactos es nulo
      ordenados = [];
    }
    
    return ordenados;
    
  }

}
