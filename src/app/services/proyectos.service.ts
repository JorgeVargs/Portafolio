import { Injectable } from '@angular/core';
import { collectionData, Firestore, addDoc, collection,doc,updateDoc } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Proyectos } from '../interfaces/Proyetos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private firestore:Firestore
  ) { }

  addProyect(proyecto:Proyectos){
    const projectRef = collection(this.firestore,'projects');

    addDoc(projectRef,proyecto)
    .then(()=>{
      console.log("success");
    })
    .catch(error=>{
      return error;
    })
  }

  getProject():Observable<Proyectos[]>{
    const proyectoRef = collection(this.firestore,'projects');
    return collectionData(proyectoRef,{idField:'id'}) as Observable<Proyectos[]>;
  }

  updateProyect(proyecto:Proyectos){
      const proyectoRef = doc(this.firestore,`projects/${proyecto.id}`);

      setDoc(proyectoRef,proyecto)
      .then((data) => {console.log('Successful');})
      .catch(error=>{
        return error;
      })
  }
}
