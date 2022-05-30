import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {


  constructor() { }

  
  formAboutMe: any;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formAboutMe= new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mensaje: new FormControl('',[Validators.required,Validators.minLength(10)])
    })
  }
}
