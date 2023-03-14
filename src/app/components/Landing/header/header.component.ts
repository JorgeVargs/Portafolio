import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  //header
  public backheader:string;
  public titulo: string;
  public puesto: string;
  public cv: string;

  //bloque Acerca de mí
  public fotografia:string;
  public subtitle:string;
  public descripcion:string;

  constructor(
    private _aboutmeService:AboutmeService,
    private _presentationService:PresentationService
  ) {

    this.backheader = "";
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
    });

    this._presentationService.getPresentation().subscribe(presentation => {
      this.backheader = presentation[0].banner;
    })
  }
}
