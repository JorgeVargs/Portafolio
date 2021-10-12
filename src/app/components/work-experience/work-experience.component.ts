import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  public companys:any = [
    {
      logo:"./assets/images/valenetwork.jpg",
      puesto:"Programador Web",
      periodo:"2020 - Actual",
      descripcion:"Maquetación e integración de sitios web. Creación de maillings y configuración de los mismos."
    },
    {
      logo:"./assets/images/clickspublicitarios.jpg",
      puesto:"Desarrollador Front-End",
      periodo:"2018 - 2020",
      descripcion:"Maquetación, integración y mantenimiento de sitios web."
    },
    {
      //publicidad en línea
      logo:"./assets/images/clickspublicitarios.jpg",
      puesto:"Desarrollador Web",
      periodo:"2017 - 2019",
      descripcion:"Maquetación, integración, mantenimiento de sitios web."
    },
     {
      logo:"./assets/images/anzen-digital.png",
      puesto:"Desarrollador Front-End",
      periodo:"2016 - 2017",
      descripcion:"Maquetación de prototipos para bancas empresariales y personales."
    },
    {
      //grupo dara
      logo:"./assets/images/grupo-dara.jpg",
      puesto:"Coordinador de TI",
      periodo:"2014 - 2015",
      descripcion:"Mantenimiento de equipos de computo, sitios web e implementación de sistemas web."
    },
     {
      logo:"./assets/images/innovattia.jpg",
      puesto:"Desarrollador Web",
      periodo:"2014 (Prácticas)",
      descripcion:"Maquetación, integración, mantenimiento de sitios web."
    }
    
  ];

  constructor() {
  }

  owlOptions: OwlOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        }
      },
      nav: false
    }

  ngOnInit(): void {
  }

}
