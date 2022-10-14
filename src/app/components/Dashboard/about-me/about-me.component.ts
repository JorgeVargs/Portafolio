import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroup, FormGroupName, Validators, FormControl } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { debug } from 'console';
import { AboutMe } from 'src/app/interfaces/AboutMe';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  about: AboutMe[];
  idAbout:any;
  formAboutMe: any;

  isImageSaved: boolean = false;
  cardImageBase64: string = '';

  //variables para formulario

  fotografia:string = '';

  constructor(
    private aboutmeService:AboutmeService
  ) {
    this.idAbout = '';
    this.about = [];
   }

  ngOnInit(): void {
    this.initForm();

    this.aboutmeService.getAbout().subscribe(aboutme => {
      this.about = aboutme;
      this.formAboutMe.patchValue({
        "titulo":this.about[0].titulo,
        "descripcion":this.about[0].descripcion
      });

      this.idAbout = this.about[0].id;
      this.fotografia = this.about[0].fotografia;
    });

    
    //var _aboutme = await this.aboutmeService.getAbout().toPromise();
  }

  initForm(){
    this.formAboutMe= new FormGroup({
      fotografia: new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required,Validators.minLength(10)]),
      descripcion: new FormControl('',[Validators.required])
    })
  }

  updateAbout(){
    this.formAboutMe.value.fotografia = this.cardImageBase64;
    
    const response = this.aboutmeService.putAbout(this.formAboutMe.value, this.idAbout);

    console.log(response);
  }

  uploadFile(fileInput: any) {
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
}
