import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public titulo: string;
  public puesto: string;
  public cv: string;

  constructor() {
    this.titulo = "Luis Vargas";
    this.puesto = "Desarrollador Front-End";
    this.cv = "./assets/curriculum-vitae-jorge-luis-vargas.pdf";
  }
}
