import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/interfaces/Skills';
import { SkillsService } from 'src/app/services/skills.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills-dash',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponentD implements OnInit {
  formSkill: any;
  imagebase64:string;
  listSkill:Skills[]=[];

  constructor(
    private skillService:SkillsService,
    private uploadFileService:UploadFileService
  ) { 

    this.imagebase64 = '';
  }

  ngOnInit(): void {
    this.initForm();
    this.skillService.getSkill().subscribe(skill => {
      this.listSkill = skill;
    })
  }

  uploadFile(event:any):any{
    const archivo = event.target.files[0];
    
    this.uploadFileService.extraerBase64(archivo).then((imagen:any) => {
      this.imagebase64 = imagen.base;
    });
  }

  initForm(){
    this.formSkill = new FormGroup({
      logo:new FormControl('',[Validators.required]),
      tecnologia:new FormControl('',[Validators.required])
    })
  }

  isValid(nombreControl:string){
    return (this.formSkill.get(nombreControl).invalid && this.formSkill.get(nombreControl).touched) 
  }

  agregarSkill(){
    this.formSkill.value.logo = this.imagebase64;
    const response = this.skillService.addSkill(this.formSkill.value);

    Swal.fire("Skill cargado correctamente");
    this.formSkill.reset();
  }

  onClickDelete(skill:Skills){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.skillService.deleteSkill(skill);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
