
import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  animations: [
    fadeInAnimation
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public badgeState = "hidden"

  copyEmail() {
    this.badgeState = "block"

    setTimeout(() => {
      this.badgeState = "hidden"
    }, 2000);
  }
}