import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/employees/project';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';
import { UserService } from 'src/app/services/employees/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  roles = environment.ROLES;
  projects: Project[] = [];

  constructor(private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      httpResponse => this.projects = httpResponse,
      httpError => console.log(httpError)
    )
  }

}
