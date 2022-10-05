import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupName, Validators } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

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
    this.formAboutMe= new UntypedFormGroup({
      nombre: new UntypedFormControl('',[Validators.required,Validators.minLength(10)]),
      email: new UntypedFormControl('',[Validators.required,Validators.email]),
      mensaje: new UntypedFormControl('',[Validators.required,Validators.minLength(10)])
    })
  }
}
