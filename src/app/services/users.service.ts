import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user.model';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private URL = 'https://young-sands-07814.herokuapp.com/api/users';

  constructor(
    private http: HttpClient
  ) { }

  create(user: User) {
    return this.http.post(this.URL, user);
  }
}
