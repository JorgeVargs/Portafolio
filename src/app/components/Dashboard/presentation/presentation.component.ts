import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { PresentationService } from 'src/app/services/presentation.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  formPresentation: any;
  idPresentation: any;
  imagebase64: string;
  banner: string = "";

  mensaje: any;

  constructor(
    private uploadFileService: UploadFileService,
    private presentationService: PresentationService
  ) {
    this.imagebase64 = '';
    this.idPresentation = '';
  }

  ngOnInit(): void {
    this.initForm();

    this.presentationService.getPresentation().subscribe(presentation => {
      this.banner = presentation[0].banner;
      this.idPresentation = presentation[0].id;
    });
  }

  initForm() {
    this.formPresentation = new FormGroup({
      banner: new FormControl('', [Validators.required])
    })
  }

  isValid(nombreControl: string) {
    return (this.formPresentation.get(nombreControl).invalid && this.formPresentation.get(nombreControl).touched)
  }


  uploadFile(event: any): any {
    const archivo = event.target.files[0];

    this.uploadFileService.extraerBase64(archivo).then((imagen: any) => {
      this.imagebase64 = imagen.base;
      this.banner = imagen.base;
    });
  }

  updatePresentation() {
    if (this.imagebase64) {
      this.formPresentation.value.banner = this.imagebase64;
    } else {
      this.formPresentation.value.banner = this.banner;
    }

    this.presentationService.putPresentation(this.formPresentation.value, this.idPresentation).then(() => {
      Swal.fire(
        'Excelente!',
        'Se han actualizado los datos correctamente!',
        'success'
      )
    }, (error) => {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'warning'
      });
    })

  }

}
