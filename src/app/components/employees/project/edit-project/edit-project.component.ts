import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/employees/project';
import { ProjectService } from 'src/app/services/employees/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  project: Project = new Project();
  messages = {
    error: "",
    message: ""
  }

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    let projectId = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.projectService.getProjectById(projectId).subscribe(
      response => this.project = response,
      error => console.log(error)
    )
  }

  saveChange() {
    this.projectService.updateProject(this.project).subscribe(
      response => this.messages = {error: "", message: "Project updated successfully"},
      error => {
        this.messages = {error: "Error while updating project", message: ""}
        console.log(error)
      }
    )
  }

}
