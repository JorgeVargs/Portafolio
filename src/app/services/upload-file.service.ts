import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  public cardImageBase64: string;
  isImageSaved: boolean;

  constructor() {
    this.cardImageBase64 = '';
    this.isImageSaved = false;
  }


  CreateBase64String(fileInput: any) {
    console.log(fileInput);
    if (fileInput) {
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
      reader.readAsDataURL(fileInput);
    }

    return this.cardImageBase64;
  }

}
