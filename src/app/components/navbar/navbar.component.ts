import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentPage: string = "";

  employeesPages = [
    {
      name: "Users",
      url: "users"
    },
    {
      name: "Projects",
      url: "projects"
    }
  ];

  reservationsPages = [
    {
      name: "Reservations",
      url: "reservations"
    }
  ];

  toolsPages = [
    {
      name: "Hardwares",
      url: "hardwares"
    },
    {
      name: "Softwares",
      url: "softwares"
    },
    {
      name: "Documents",
      url: "documents"
    },
    {
      name: "Generic Functions",
      url: "generic-functions"
    }
  ];


  constructor() { }

  ngOnInit(): void {
    document.getElementById("menu-button")?.click();
  }

}
