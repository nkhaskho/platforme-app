import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/employees/project';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';
import { UserService } from 'src/app/services/employees/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  userIndex: number = 0;
  newUser: User = new User();
  projects: Project[] = [];
  selectedProject: number = 0;
  roles = environment.ROLES;
  searchedText: string = "";
  cacheProjects: Record<string, string> = {}

  constructor(private userService: UserService, 
              private projectService: ProjectService) { }

  async ngOnInit() {
    this.userService.getAllUsers().subscribe(
      httpResponse => {
        console.log(httpResponse);
        this.users = httpResponse;
      },
      httpError => {
        console.log(httpError);
      }
    );
    this.cacheProjects = await this.projectService.getProjectsCache();
    await this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data
        this.projects.forEach(proj => this.cacheProjects[proj.id.toString()]=proj.name)
      }
    );
    console.log(this.projects);
  }

  addEmployee() {
    this.user = this.newUser;
  }

  saveEmployee() {
    console.log(this.user);
    this.userService.addNewUser(this.user).subscribe(
      httpResponse => {
        this.users.push(httpResponse);
        document.getElementById("cancel-add-user")?.click();
      },
      httpError => {
        console.log(httpError)
      }
    )
  }

  viewUser(index: number) {
    this.user = this.users[index];
  }

  removeUser(index: number) {
    this.userIndex = index;
    this.user = this.users[index];
  }

  deleteUser() {
    this.userService.deleteUserById(this.user.id).subscribe(
      response => {
        this.users.splice(this.userIndex, 1);
        document.getElementById("cancel-delete-user")?.click();
      },
      httpError => console.log(httpError)
    )
  }

  search(e: any) {
    console.log(this.searchedText);
    //this.users = this.users.filter(user => user.username.includes(this.searchedText));
  }

  async changeProject(event: any) {
    await this.userService.getUsersByProject(this.selectedProject).subscribe(
      httpResponse => this.users = httpResponse
    )
  }

}
