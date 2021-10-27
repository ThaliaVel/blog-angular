import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre!: string;
  public apellidos!: string;

  constructor(
    //Sacar los parametros de la url
    private _route: ActivatedRoute,
    //Redirecciones a otras paginas
    private _router: Router
    ) { }

  ngOnInit(): void {
    //Recoger los parametros de la url
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
      
    });
  }

  redireccion(){
    this._router.navigate(['/pagina', 'Thalia', 'Velazquez']);
  }

}
