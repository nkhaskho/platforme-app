import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/employees/user';
import { ProjectService } from 'src/app/services/employees/project.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User = new User();
  projects: Record<string,any> = {}
  roles: Record<string, any> = {
    "PROJECT_MANAGER": "Project manager",
    "TEAM_LEADER": "Team leader",
    "TEAM_MEMBER": "Team member"
  }

  constructor(private projectService: ProjectService) {  }

  async ngOnInit() {
    this.projects = await this.projectService.getProjectsCache();
  }

}
