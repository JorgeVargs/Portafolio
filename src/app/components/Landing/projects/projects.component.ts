import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  // public proyectos:any = [
  //   {
  //     screen:"./assets/images/proyectos/superior-56.jpg",
  //     nombre: "Superior 56",
  //     tecnologia: "Angular",
  //     url:"https://superior56.com.mx/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/anafloresabogada.png",
  //     nombre:"Ana Flores Abogada",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://anafloresabogada.com/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/banners.png",
  //     nombre:"Banners (Google & Amazon)",
  //     tecnologia:"Google Web Designer (HTML5)"
  //   },
  //    {
  //     screen:"./assets/images/proyectos/hersheys-reposteria.png",
  //     nombre:"hershey's Repostería",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://hersheysreposteria.com.mx/reposteria-en-casa-hersheys/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/hersheys-profesional.png",
  //     nombre:"hershey's Profesional",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://hersheysreposteria.com.mx/profesional/"
  //   },
  //    {
  //     screen:"./assets/images/proyectos/acento-mixcoac.png",
  //     nombre:"Acento Mixcoac",
  //     tecnologia:"Landing Page: HTML, JQuery, CSS, PHP",
  //     url:"https://www.acentomixcoac.com/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/jorgevargsbooks.png",
  //     nombre:"Jorgevargsbooks",
  //     tecnologia:"Materialize & Wordpress",
  //     url:"https://jorgevargsbooks.com"
  //   },
  //    {
  //     screen:"./assets/images/proyectos/msmedia.png",
  //     nombre:"Ms&Media",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://msmedia.com.mx/publicidad-exterior/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/openfinancehub.png",
  //     nombre:"Open Finance Hub",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://cecoban.com/openfinancehub/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/periferico1991.png",
  //     nombre:"Landing Periferico 1991",
  //     tecnologia:"Landing Page: HTML, Jquery, CSS, PHP",
  //     url:"https://my-home.mx/periferico1991/"
  //   },
  //   {
  //     screen:"./assets/images/proyectos/olimpiadasespeciales.png",
  //     nombre:"Olimpiadas Especiales",
  //     tecnologia:"Bootstrap & Wordpress",
  //     url:"https://specialolympics.org.mx/"
  //   }
  // ];

  public proyectos:any;
  
  constructor(
    private _proyectoService: ProyectosService
  ) { 
    this.proyectos = '';
  }

  
  ngOnInit(): void {
    this._proyectoService.getProject().subscribe(proyecto=>{
      this.proyectos = proyecto;  
    })
  }
}
