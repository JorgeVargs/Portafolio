import { Injectable } from '@angular/core';
import { collectionData,collection,doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AboutMe } from '../interfaces/AboutMe';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor(
    private firestore:Firestore
  ) { }

  getAbout():Observable<AboutMe[]>{
    const aboutRef = collection(this.firestore,'aboutme');

    return collectionData(aboutRef,{idField:'id'}) as Observable<AboutMe[]>;
  }

  putAbout(about:AboutMe,id:string){
    const aboutMeDocRef = doc(this.firestore,`aboutme/${id}`);

    setDoc(aboutMeDocRef,about)
    .then(()=>{
      console.log("success");
    })
    .catch(error =>{
      return error;
    })
  }
  
}
