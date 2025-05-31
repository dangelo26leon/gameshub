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
Tiene como ventaja de siempre poner el estado actual del juego a las personas.
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JuegosDataService } from '../../services/juegos-data.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
  providers: [CurrencyPipe, DecimalPipe]
})
export class EstadisticasComponent implements OnInit {
  juegosTotal: number = 0;
  juegosGratis: number = 0;
  juegosdePago: number = 0;
  mejorRating: { nombre: string, rating: number } = { nombre: '', rating: 0 };
  promPrecio: number = 0;

  constructor (private juegosService: JuegosDataService){}

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe(juegos => {
      this.juegosTotal=juegos.length;

      const juegosdePago = juegos.filter(juegos => juegos.precio>0);
      const juegosGratis = juegos.filter(juegos => juegos.precio===0);

      this.juegosdePago=juegosdePago.length;
      this.juegosGratis=juegosGratis.length;

      if(juegos.length>0){
        const mejor=juegos.reduce((prev,curr)=>prev.rating > curr.rating ? prev: curr);
        this.mejorRating={ nombre: mejor.nombre, rating: mejor.rating };
      }

      if(juegosdePago.length>0) {
        const sumPrecio=juegosdePago.reduce((acc, juego) => acc + juego.precio, 0);
        this.promPrecio=sumPrecio/juegosdePago.length;
      }

    })
      
  }

}
