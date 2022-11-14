import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/interfaces/Proyetos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  formProyecto:any;
  imagebase64: string;
  listProyects:Proyectos[]=[];

  itemEditar:any={
    imagenProyecto:'',
    nombreProyecto:'',
    descripcion:'',
    urlProyecto:''
  };


  constructor(
    private uploadFileService:UploadFileService,
    private proyectService:ProyectosService
  ) {
    this.imagebase64 = '';
  }

  ngOnInit(): void {
    this.initForm();
    this.proyectService.getProject().subscribe(proyecto=>{
      this.listProyects = proyecto;
    })
  }

  initForm(){
    this.formProyecto = new FormGroup({
      imagenProyecto:new FormControl('',[Validators.required]),
      nombreProyecto:new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      urlProyecto:new FormControl('',[Validators.required])
    })
  }

  isValid(nombreControl:string){
    return (this.formProyecto.get(nombreControl).invalid && this.formProyecto.get(nombreControl).touched) 
  }

  
  uploadFile(event:any):any{
    const archivo = event.target.files[0];
    
    this.uploadFileService.extraerBase64(archivo).then((imagen:any) => {
      this.imagebase64 = imagen.base;
    });
  }

  agregarProyecto(){
    this.formProyecto.value.imagenProyecto = this.imagebase64;

    const response = this.proyectService.addProyect(this.formProyecto.value);
    console.log(response);
    Swal.fire("Proyecto Cargado correctamente");
    this.formProyecto.reset();
  }

  updateProyecto(proyecto:Proyectos){
    this.itemEditar = proyecto;
  }

  editarForm(){
    if(this.imagebase64){
      this.itemEditar.imagenProyecto = this.imagebase64;
    }

    const response = this.proyectService.updateProyect(this.itemEditar);
    console.log(response);
  }
}
