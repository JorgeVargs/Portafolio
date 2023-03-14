import { Injectable } from '@angular/core';
import { collectionData,collection,doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Presentation } from '../interfaces/Presentation';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  res:any='';
  constructor(
    private firestore:Firestore
  ) { }

  getPresentation():Observable<Presentation[]>{
    const presentationRef = collection(this.firestore,'presentation');

    return collectionData(presentationRef,{idField:'id'}) as Observable<Presentation[]>;
  }

  async putPresentation(presentation:Presentation,id:string){
    const presentationDocRef = doc(this.firestore,`presentation/${id}`);

    try{
      await setDoc(presentationDocRef,presentation);
      return "success";
    }catch(error){
      return error;
    }finally{
      console.log("finish");
    }
    
  }
  
}
