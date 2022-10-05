import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ICompanys } from 'src/app/interfaces/ICompanys';
import { DataServices } from 'src/app/services/data.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(
    private dataService:DataServices,
    private formBuilder: UntypedFormBuilder
    ) { }

  formExperience: any;
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formExperience = new UntypedFormGroup({
      namecompany: new UntypedFormControl('',[Validators.required]),
      rangofechas: new UntypedFormControl('',[Validators.required]),
      descripcion: new UntypedFormControl('',[Validators.required])
    })
  }

  isValid(nombreControl:string){
    return (this.formExperience.get(nombreControl).invalid && this.formExperience.get(nombreControl).touched) 
  }

  companys:ICompanys[] = [
   
  ];

  agregarCompany(){
    console.log(this.formExperience.value);
    this.dataService.guardarCompanys(this.formExperience.value);
  }

}
