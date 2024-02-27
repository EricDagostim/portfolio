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
      description: 'Cargo efetivo de 8h, atuando no desenvolvimento de portais e sistemas web de alta performance, levantamento de requisitos, criação de interfaces para protótipos de validação de requisitos (figma), metodologia kanban e desenvolvimento front-end. Desenvolvimento de sites e portais acessíveis, responsivos e performáticos que atendam as necessidades dos munícipes.',
      tools: 'HTML, CSS, JavaScript, Jquery, PHP, CakePHP, Bootstrap, Google Analytics e Figma.'
    },
    {
      office: '[Estágio] Desenvolvedor Front-End',
      company: 'Prefeitura Municipal de Criciúma',
      companyLink: 'https://www.criciuma.sc.gov.br/',
      date: 'Março de 2022 - Outubro de 2022',
      description: 'Estágio de 6 horas diárias, atuando no desenvolvimento de portais e sistemas web de alta performance, levantamento de requisitos, criação de interfaces para protótipos de validação de requisitos (figma), metodologia kanban e desenvolvimento front-end.',
      tools: 'HTML, CSS, JavaScript, PHP, CakePHP, Bootstrap e Figma.'
    },
    {
      office: '[Estágio] Operações de infraestrutura de TI',
      company: 'Prefeitura Municipal de Criciúma',
      companyLink: 'https://www.criciuma.sc.gov.br/',
      date: 'Setembro de 2021 - Março de 2022',
      description: 'Estágio de 6 horas diárias, atuando no atendimento service-desk e suporte técnico, manutenção de computadores, instalação e configuração de softwares, manutenção de redes e servidores, suporte a sistemas de gestão',
      tools: ''
    }    
  ];

}
