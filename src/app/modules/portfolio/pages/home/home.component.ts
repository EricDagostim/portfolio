import { Component } from '@angular/core';
import { appConfig } from '../../../../app.config';
import { HeaderComponent } from '../../components/header/header.component';

//Components
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './home.component.html',  
})
export class HomeComponent {

}
