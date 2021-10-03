import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/login-form';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  errors = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.loginForm)
  }

  login() {
    console.log(this.loginForm);
    this.authService.authenticate(this.loginForm).subscribe(
      response => {
        this.authService.newLoggedUser(this.loginForm.username, response.access);
        this.router.navigate(['/'])
      },
      error => console.log(error)
    )
    
  }

}
