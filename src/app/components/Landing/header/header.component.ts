import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  //header
  public titulo: string;
  public puesto: string;
  public cv: string;

  //bloque Acerca de mí
  public fotografia:string;
  public subtitle:string;
  public descripcion:string;

  constructor(
    private _aboutmeService:AboutmeService
  ) {
    this.titulo = "Luis Vargas";
    this.puesto = "Desarrollador Front-End";
    this.cv = "./assets/curriculum-vitae-jorge-luis-vargas.pdf";

    this.fotografia = '';
    this.subtitle = '';
    this.descripcion = ''
   }


  ngOnInit(): void {
    this._aboutmeService.getAbout().subscribe(about =>{
      this.fotografia = about[0].fotografia;
      this.subtitle = about[0].titulo;
      this.descripcion = about[0].descripcion;
    })
  }
}
