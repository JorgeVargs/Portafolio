import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ICompanys } from 'src/app/interfaces/ICompanys';
import { CompanysService } from 'src/app/services/companys.service';
import { DataServices } from 'src/app/services/data.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  companys: ICompanys[] = [];

  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  formExperience: any;

  constructor(
    private dataService:DataServices,
    private companyService:CompanysService,
    private formBuilder: UntypedFormBuilder
    ) { }

  
  ngOnInit(): void {
    this.initForm();

    this.companyService.getCompany().subscribe(companys =>{
        this.companys = companys;
    });  
  }

  initForm(){
    this.formExperience = new UntypedFormGroup({
      imagecompany: new UntypedFormControl('',[Validators.required]),
      puestocompany: new UntypedFormControl('',[Validators.required]),
      rangofechas: new UntypedFormControl('',[Validators.required]),
      descripcion: new UntypedFormControl('',[Validators.required])
    })
  }

  isValid(nombreControl:string){
    return (this.formExperience.get(nombreControl).invalid && this.formExperience.get(nombreControl).touched) 
  }

  CreateBase64String(fileInput: any) {
    console.log(fileInput.target.files[0].length);
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;         
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  async agregarCompany(){
    this.formExperience.value.imagecompany = this.cardImageBase64;
    // this.dataService.guardarCompanys(this.formExperience.value);

    const response = await this.companyService.addCompany(this.formExperience.value);

  }

  async onClickDelete(company:ICompanys){
    const response = await this.companyService.deleteCompany(company);
    console.log(response);
  }

}
