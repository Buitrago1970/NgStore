import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import {AuthService} from './services/auth.service';

import { User } from './modals/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
  }
  create() {
    const user: User = {
      email: 'testEmail@mail.com',
      name: 'testName',
      password: 'testPassword'
    };
    this.usersService.create(user).subscribe( data => {
      console.log(data);
    }
    )
  }
}
