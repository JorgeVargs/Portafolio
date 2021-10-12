import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   scrolled: boolean = false;

  public isShown:boolean;
  public texto:string;

  constructor() { 
    this.isShown = false;
    this.texto = "Hola";
  }

  changeState(){
    this.isShown = !this.isShown;
  }
  
  currentSection = 'section1';

   onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 150;
    if(this.scrolled){
      console.log(this.scrolled);
    }else{
      this.scrolled = false;
    }
  }
}
