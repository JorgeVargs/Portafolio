import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICompanys } from "../interfaces/ICompanys";
import { CompanysService } from "./companys.service";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}

    // guardarCompanys(companys:ICompanys[]){
    //     this.httpClient.post('https://portafolio-91-default-rtdb.firebaseio.com/datos.json',companys).subscribe(
    //         Response=>console.log("Se han guardado los empleados:" + Response),
    //         error=> console.log("Error: " + error),
    //     );
    // }
    
}