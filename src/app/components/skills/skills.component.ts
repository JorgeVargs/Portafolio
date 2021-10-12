import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills:any = [
    {
      logo:"./assets/images/skills/html5.png",
      nombre:"HTML 5"
    },
    {
      logo:"./assets/images/skills/css3.png",
      nombre:"CSS 3"
    },
    {
      logo:"./assets/images/skills/javascript.png",
      nombre:"JAVASCRIPT"
    },
     {
      logo:"./assets/images/skills/sass.png",
      nombre:"SASS"
    },
     {
      logo:"./assets/images/skills/wordpress.png",
      nombre:"WORDPRESS"
    },
     {
      logo:"./assets/images/skills/bootstrap.png",
      nombre:"BOOTSTRAP"
    },
     {
      logo:"./assets/images/skills/materialize.png",
      nombre:"MATERIALIZE"
    },
     {
      logo:"./assets/images/skills/php.png",
      nombre:"PHP"
    },
     {
      logo:"./assets/images/skills/jquery.png",
      nombre:"JQUERY"
    },
     {
      logo:"./assets/images/skills/git.png",
      nombre:"GIT"
    },
     {
      logo:"./assets/images/skills/google-web-designer.png",
      nombre:"GOOGLE WEB DESIGNER"
    },
     {
      logo:"./assets/images/skills/mailchimp.png",
      nombre:"MAILCHIMP"
    }
  ];

  constructor() { }
}
