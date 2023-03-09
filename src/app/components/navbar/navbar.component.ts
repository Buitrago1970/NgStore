import { Component } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/modals/auth.model';
import { UserDTO } from 'src/app/modals/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuExpanded = false;
  counter = 0;
  user: UserDTO | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.storeService.cart$.subscribe((data) => {
      this.counter = data.length;
    });
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  login() {
    const auth: Auth = {
      email: 'testEmail@mail.com',
      password: 'testPassword',
    };
    this.authService
      .login(auth)
      .pipe(
        switchMap(() => this.getUser())
      )
      .subscribe((data: any) => {
        this.user = data;
      });
  }

  getUser() {
    return this.authService.getUserData();
  }
}
