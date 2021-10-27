import { Component} from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo";
        this.comentario = "este es mi-componente";
        this.year = 2021;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componente funcionando!");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}