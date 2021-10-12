import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  public proyectos:any = [
     {
      screen:"./assets/images/proyectos/hersheys-reposteria.png",
      nombre:"hershey's Repostería",
      tecnologia:"Bootstrap & Wordpress",
      url:"https://hersheysreposteria.com.mx/reposteria-en-casa-hersheys/"
    },
    {
      screen:"./assets/images/proyectos/hersheys-profesional.png",
      nombre:"hershey's Profesional",
      tecnologia:"Bootstrap & Wordpress",
      url:"https://hersheysreposteria.com.mx/profesional/"
    },
     {
      screen:"./assets/images/proyectos/acento-mixcoac.png",
      nombre:"Acento Mixcoac",
      tecnologia:"Landing Page: HTML, JQuery, CSS, PHP",
      url:"https://www.acentomixcoac.com/"
    },
    {
      screen:"./assets/images/proyectos/jorgevargsbooks.png",
      nombre:"Jorgevargsbooks",
      tecnologia:"Materialize & Wordpress",
      url:"https://jorgevargsbooks.com"
    },
     {
      screen:"./assets/images/proyectos/msmedia.png",
      nombre:"Ms&Media",
      tecnologia:"Bootstrap & Wordpress",
      url:"https://msmedia.com.mx/publicidad-exterior/"
    },
  ];
  constructor() { }
}