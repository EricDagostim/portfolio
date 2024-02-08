import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';

//Components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeaderComponent
  ],
  templateUrl: './home.component.html',  
})
export class HomeComponent {

}
