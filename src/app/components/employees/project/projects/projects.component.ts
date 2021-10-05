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
  projectIndex: number = 0;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      httpResponse => this.projects = httpResponse,
      httpError => console.log(httpError)
    )
  }

  selectProjectIndex(index: number) {
    this.projectIndex = index;
  }

  addNewProject() {
    this.projectService.addProject(this.newProject).subscribe(
      httpResponse => {
        this.projects.push(httpResponse);
        this.newProject = new Project();
        document.getElementById("dismiss-add-project")?.click();
      },
      httpError => console.log(httpError)
    )
  }

  deleteProject() {
    this.projectService.deleteProject(this.projects[this.projectIndex].id).subscribe(
      data => {
        this.projects.splice(this.projectIndex, 1);
        document.getElementById("dismiss-delete-project")?.click();
      }
    )
  }

}
