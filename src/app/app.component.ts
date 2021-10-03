import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'platforme-app';
  loggedUser: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("user") || "";
    if (this.loggedUser.length>0) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['login'])
    }
  }
}
