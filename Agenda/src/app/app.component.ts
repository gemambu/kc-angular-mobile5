import { Component } from '@angular/core';


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
export class AppComponent {
}
