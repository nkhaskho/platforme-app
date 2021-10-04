import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'platforme-app';
  loggedUser: string = "";
  userId: number = 0;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("user") || "";
    this.userId = parseInt(localStorage.getItem("id") || "0");
    if (this.loggedUser.length>0) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['login'])
    }
  }

  signOut() {
    this.authService.logOutUser();
    this.router.navigate(['/login']);
  }
}
