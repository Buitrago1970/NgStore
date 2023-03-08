import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuExpanded = false;

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

}
