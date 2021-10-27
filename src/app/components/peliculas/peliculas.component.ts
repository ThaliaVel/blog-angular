import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas : Array<Pelicula>;
  public favorita!: Pelicula;
  constructor() {
    this.titulo = "Componente de peliculas";
    console.log("Texto de contructor");
    this.peliculas = [
      new Pelicula("Spiderman", 2019, "https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg"),
      new Pelicula("Vengadores Endgame", 2017, "https://www.muycomputer.com/wp-content/uploads/2019/04/avengers-endgame.jpg"),
      new Pelicula("Superman", 2013, "https://media.revistagq.com/photos/5f1e923e3c95260b5c5ad9dc/4:3/w_1124,h_843,c_limit/superman-traje-negro.jpg")
    ]
    
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    
    console.log("Aqui esta el OnInit");
    
  }

  ngDoCheck(): void {
    console.log("Y yo soy DoCheck");
    
  }

  cambiarTitulo(){
    this.titulo = "El titulo se ha cambiado";
  }

  ngOnDestroy(): void {
    console.log("El componente se va a eliminar de la ejecucion");
  }
    
  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}