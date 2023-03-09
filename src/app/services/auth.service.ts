import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../modals/auth.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(auth: Auth) {
    return this.http.post(`${this.URL}/login`, auth)
    .pipe(
      tap(
        (res: any) => {
          this.tokenService.setToken(res.access_token);
        }
      )
    )
  }
  getUserData() {
    return this.http.get(`${this.URL}/profile`);
  }
}
