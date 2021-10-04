import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/employees/project';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';
import { UserService } from 'src/app/services/employees/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User = new User();
  roles = environment.ROLES;
  projects: Project[] = [];

  constructor(private userService: UserService, 
              private activatedRoute: ActivatedRoute,
              private projectService: ProjectService) { }

  async ngOnInit() {
    // get userId param
    let userId = parseInt(this.activatedRoute.snapshot.params["id"]);
    // get user by id
    await this.userService.getUserById(userId).subscribe(
      response => this.user = response,
      error => console.log(error)
    );
    this.projectService.getAllProjects().subscribe(
      httpResponse => this.projects = httpResponse,
      httpError => console.log(httpError)
    );
  }

  saveChange() {}

}
