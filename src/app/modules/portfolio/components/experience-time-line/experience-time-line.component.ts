import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-time-line',
  standalone: true,
  imports: [],
  templateUrl: './experience-time-line.component.html'  
})
export class ExperienceTimeLineComponent {

  public experiences = [
    {
      office: 'Desenvolvedor Front-End',
      company: 'Prefeitura Municipal de Criciúma',
      companyLink: 'https://www.criciuma.sc.gov.br/',
      date: 'Outubro de 2022 - Hoje',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      tools: 'HTML, CSS, JavaScript, PHP, CakePHP, Bootstrap, Google Analytics e Figma.'
    },
    {
      office: '[Estágio] Desenvolvedor Front-End',
      company: 'Prefeitura Municipal de Criciúma',
      companyLink: 'https://www.criciuma.sc.gov.br/',
      date: 'Março de 2022 - Outubro de 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      tools: 'HTML, CSS, JavaScript, PHP, CakePHP, Bootstrap, Google Analytics e Figma.'
    },
    {
      office: '[Estágio] Operações de infraestrutura de TI',
      company: 'Prefeitura Municipal de Criciúma',
      companyLink: 'https://www.criciuma.sc.gov.br/',
      date: 'Setembro de 2021 - Março de 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      tools: 'HTML, CSS, JavaScript, PHP, CakePHP, Bootstrap, Google Analytics e Figma.'
    }    
  ];

}
