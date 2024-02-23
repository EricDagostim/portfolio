import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-time-line',
  standalone: true,
  imports: [],
  templateUrl: './experience-time-line.component.html'  
})
export class ExperienceTimeLineComponent {

  public items = [
    {
      title: 'Frontend Developer',
      subtitle: 'Company Name',
      date: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
    },
    {
      title: 'Backend Developer',
      subtitle: 'Company Name',
      date: '2018 - 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
    },
    {
      title: 'Fullstack Developer',
      subtitle: 'Company Name',
      date: '2015 - 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
    },
    {
      title: 'Web Developer',
      subtitle: 'Company Name',
      date: '2012 - 2015',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
    }
  ];

}
