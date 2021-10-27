import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string;
  @Input() nombre!: string;
  constructor() {
    this.title = "Últimos articulos";
  }

  ngOnInit(): void {
  }

}
