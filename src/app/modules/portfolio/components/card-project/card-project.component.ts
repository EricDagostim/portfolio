import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
})
export class CardProjectComponent {
  
  @Input() public project:any;
  // @Input() public tools:any;

  public tools = [
    {
     name: 'Angular',
     svg: ''
    },
    {
     
    },
    {
     
    }
  ]



}
