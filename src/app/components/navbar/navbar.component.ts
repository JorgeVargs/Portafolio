import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled: boolean = false;

  public isShown: boolean;
  public winWidth: number = 0;

  constructor() {
    this.isShown = false;
  }

  changeState() {
    this.isShown = !this.isShown;
  }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrolled = window.pageYOffset > 150;
    console.log(this.scrolled);
    if (this.scrolled) {
      this.isShown = false;
    } else {
      this.scrolled = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.winWidth = event.target.innerWidth;
  }
}
