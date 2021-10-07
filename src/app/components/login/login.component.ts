import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() loginEmitter = new EventEmitter();
  errors = {
    username: "",
    password: ""
  }
  messages = {
    error: "",
    message: ""
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void { }

  async login() {
    await this.authService.authenticate(this.loginForm).subscribe(
      response => {
        this.messages.error = "";
        this.authService.newLoggedUser(this.loginForm.username, response.access);
        this.loginEmitter.emit(this.loginForm.username);
        this.router.navigate(['home'])
      },
      httpError => {
        console.log(httpError);
        try {
          this.messages.error = httpError.error.detail
        } finally {
          this.messages.error = "Invalid credentials"
        }
      }
    )
  }

}
