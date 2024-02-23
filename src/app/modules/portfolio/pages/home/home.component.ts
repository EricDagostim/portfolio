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
    },
    {
      name: 'Viva Criciúma',
      thumbnail: '/assets/img/mockup-site-vivacriciuma.png',
      demoLink: 'https://viva.criciuma.sc.gov.br/',
    },
    {
      name: 'Procon - Criciúma',
      thumbnail: '/assets/img/mockup-site-procon.png',
      demoLink: 'https://procon.criciuma.sc.gov.br/',
    }
  ];

}
