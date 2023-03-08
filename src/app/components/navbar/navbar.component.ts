import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuExpanded = false;
  counter = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.cart$.subscribe((data) => {
      this.counter = data.length;
    });
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

}
