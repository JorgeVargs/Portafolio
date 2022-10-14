import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ICompanys } from 'src/app/interfaces/ICompanys';
import { CompanysService } from 'src/app/services/companys.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  companys: ICompanys[] = [];
  
  constructor(
    private _companysService:CompanysService
  ) {}

  owlOptions: OwlOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        }
      },
      nav: false
    }

  ngOnInit(): void {
    this._companysService.getCompany().subscribe(companys =>{
      this.companys = companys;
  });  
  }

}
