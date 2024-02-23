import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ExperienceTimeLineComponent } from '../../components/experience-time-line/experience-time-line.component';

//Components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeaderComponent, CardProjectComponent, ExperienceTimeLineComponent
  ],
  templateUrl: './home.component.html',  
})
export class HomeComponent {

  public projects = [
    {
      name: 'Malfoy o Bibliomântico',
      thumbnail: '/assets/img/mockup-malfoy-o-bibliomantico.png',
      demoLink: 'https://malfoy-o-bibliomantico.vercel.app/',
      tools:
      [
        {
          name: "Figma",
          path: "/assets/svg/icon-figma.svg"
        },
        {
          name: "Angular",
          path: "/assets/svg/icon-angular.svg"
        },
        {
          name: "RxJS",
          path: "/assets/svg/icon-rxjs.svg"
        },
        {
          name: "Tailwind",
          path: "/assets/svg/icon-tailwind.svg"
        },
        {
          name: "Typescript",
          path: "/assets/svg/icon-typescript.svg"
        },
        {
          name: "Google (Books API)",
          path: "/assets/svg/icon-google.svg"
        },

      ]
    },
    {
      name: 'Viva Criciúma',
      thumbnail: '/assets/img/mockup-site-vivacriciuma.png',
      demoLink: 'https://viva.criciuma.sc.gov.br/',
      tools:
      [
        {
          name: "Figma",
          path: "/assets/svg/icon-figma.svg"
        },
        {
          name: "HTML 5",
          path: "/assets/svg/icon-html.svg"
        },
        {
          name: "CSS 3",
          path: "/assets/svg/icon-css.svg"
        },
        {
          name: "Javascript",
          path: "/assets/svg/icon-javascript.svg"
        },
        {
          name: "Bootstrap",
          path: "/assets/svg/icon-bootstrap.svg"
        },        
        {
          name: "Mysql",
          path: "/assets/svg/icon-mysql.svg"
        },
        {
          name: "Cake PHP",
          path: "/assets/svg/icon-cakephp.svg"
        },

      ]
    },
    {
      name: 'Procon - Criciúma',
      thumbnail: '/assets/img/mockup-site-procon.png',
      demoLink: 'https://procon.criciuma.sc.gov.br/',
      tools:
      [
        {
          name: "Figma",
          path: "/assets/svg/icon-figma.svg"
        },
        {
          name: "HTML 5",
          path: "/assets/svg/icon-html.svg"
        },
        {
          name: "CSS 3",
          path: "/assets/svg/icon-css.svg"
        },
        {
          name: "Javascript",
          path: "/assets/svg/icon-javascript.svg"
        },
        {
          name: "Bootstrap",
          path: "/assets/svg/icon-bootstrap.svg"
        },
        {
          name: "Mysql",
          path: "/assets/svg/icon-mysql.svg"
        },
        {
          name: "Cake PHP",
          path: "/assets/svg/icon-cakephp.svg"
        },

      ]
    }
  ];

}
