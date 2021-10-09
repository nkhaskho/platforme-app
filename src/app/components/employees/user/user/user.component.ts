import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';
import { UserService } from 'src/app/services/employees/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User = new User();
  projects: Record<string, any> = {}
  roles: Record<string, any> = {
    "PROJECT_MANAGER": "Project manager",
    "TEAM_LEADER": "Team leader",
    "TEAM_MEMBER": "Team member"
  };
  loggedUserRole: string = "TEAM_MEMBER";
  loggedUserProject: number = 1;

  constructor(private projectService: ProjectService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.projects = await this.projectService.getProjectsCache();
    let userId = await this.activatedRoute.snapshot.params["id"];
    await this.userService.getUserById(userId).subscribe(
      httpResponse => this.user = httpResponse
    );
    this.loggedUserRole = localStorage.getItem("role") || "";
    this.loggedUserProject = parseInt(localStorage.getItem("project") || "0");
  }

}
