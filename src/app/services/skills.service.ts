import { Injectable } from '@angular/core';
import { Firestore,collection, addDoc,collectionData,doc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Skills } from '../interfaces/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  listSkills: Skills[] = [];

  constructor(
    private firestore:Firestore
  ) { }

  addSkill(skill:Skills){
    const skillRef = collection(this.firestore,'skills');

    // return addDoc(skillRef,skill);
    addDoc(skillRef,skill)
    .then(()=>{
      console.log("success");
    })
    .catch(error =>{
      return error;
    })
  }

  getSkill():Observable<Skills[]>{
    const skillRef = collection(this.firestore,'skills');
    return collectionData(skillRef,{idField:'id'}) as Observable<Skills[]>;
  }

  deleteSkill(skill:Skills){
    const skillRef = doc(this.firestore,`skills/${skill.id}`);
    return deleteDoc(skillRef);
  }


}