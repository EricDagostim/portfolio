
import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  animations: [
    fadeInAnimation
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public badgeState: string = "hidden";
  public animationState: string = ":enter";


  constructor() { }


  copyEmail() {
    this.badgeState = "block"
    console.log("Email copied to clipboard")


    setTimeout(() => {
      this.animationState = ":leave"
    }, 2000);

    setTimeout(() => {
      this.badgeState = "hidden"
    }, 2300);
  }
}