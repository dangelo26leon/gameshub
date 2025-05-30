/*
RESPUESTAS PARTE 4.1:
1. ¿En qué archivo se define la interfaz juego?
juego.inteface.ts
2. ¿Qué archivo maneja el estado global de los filtros?
filtros.component.ts
3. ¿Donde se configura el HttpClient para la aplicación?
app.config.ts
*/

/*
RESPUESTAS PARTE 4.2:
1. ¿Por qué este proyecto No tiene app.module.ts?
Porque este proyecto al ser creado se puso en --standalone, eso hace que no se use NgModules y se usa app.config.ts en su lugar.
2. ¿Qué ventaja tiene usar BehaviorSubject en el servicio de juegos?
Tiene como ventaja de siempre poner el estado actual del juego
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
