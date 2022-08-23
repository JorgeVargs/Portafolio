import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanysService {

  constructor() { }

  private companys:any = [
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

  getCompanys(){
    return this.companys;
  }
}
