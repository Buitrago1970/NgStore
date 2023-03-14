import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authuser() {
    this.authService.login(this.form.value).subscribe(
      res => {
        console.log(res);
        // Go to home page
         this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        // Show error message to user
        this.router.navigate(['/']);

      }
    )
  }
}
