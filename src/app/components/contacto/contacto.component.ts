import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{

  constructor(  private http: HttpClient) { 
  }

  formDatos: any;
  ngOnInit(): void {
     this.initForm();
  }

  initForm(){
    this.formDatos= new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mensaje: new FormControl('',[Validators.required,Validators.minLength(10)])
    })
  }

  isValid(nombreControl:string){
    return (this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched) 
  }

  
  enviarFormulario(){
    console.log(this.formDatos.value);

    const email = this.formDatos.value;

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mqkwpjyy',
        { name: email.nombre, replyto: email.email, message: email.mensaje },
        { 'headers': headers }).subscribe(
          (response: any) => {
            if(response.ok){
              alert("Se ha enviado correctamente el correo");
              this.formDatos.reset();
            }else{
              alert(response);
            }
          }
        );
  }
}
