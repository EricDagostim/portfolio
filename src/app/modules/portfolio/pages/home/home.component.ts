import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

//Components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeaderComponent, CardProjectComponent
  ],
  templateUrl: './home.component.html',  
})
export class HomeComponent {

}
