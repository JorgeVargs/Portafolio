import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() {
  }

  owlOptions: OwlOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        480: {
          items: 1
        },
        767: {
          items: 2
        },
        1024: {
          items: 3
        }
      },
      nav: false
    }

  ngOnInit(): void {
  }

}
