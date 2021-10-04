import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/employees/project';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';
import { UserService } from 'src/app/services/employees/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  newUser: User = new User();
  projects: Project[] = [];
  roles = [
    "PROJECT_MANAGER",
    "TEAM_LEADER",
    "TEAM_MEMBER"
  ]

  constructor(private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      httpResponse => {
        console.log(httpResponse);
        this.users = httpResponse;
      },
      httpError => {
        console.log(httpError);
      }
    );
    this.projectService.getAllProjects().subscribe(
      httpResponse => {
        console.log(httpResponse);
        this.projects = httpResponse;
      },
      httpError => {
        console.log(httpError);
      }
    )
  }

  save() {
    console.log(this.user);
  }

}
