import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/employees/project';
import { ProjectService } from 'src/app/services/employees/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  newProject: Project = new Project();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      httpResponse => this.projects = httpResponse,
      httpError => console.log(httpError)
    )
  }

  addNewProject() {
    this.projectService.addProject(this.newProject).subscribe(
      httpResponse => this.projects.push(httpResponse),
      httpError => console.log(httpError)
    )
  }

}
