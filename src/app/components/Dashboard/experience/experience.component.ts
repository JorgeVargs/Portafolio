import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
    ) { }

  formExperience: any;
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formExperience = new FormGroup({
      namecompany: new FormControl('',[Validators.required]),
      rangofechas: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required])
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
