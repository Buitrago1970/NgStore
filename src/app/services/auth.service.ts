import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../modals/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor(
    private http: HttpClient
  ) { }

  login(auth: Auth) {
    return this.http.post(`${this.URL}/login`, auth);
  }
  getUserData(token : string) {
    return this.http.get(`${this.URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
