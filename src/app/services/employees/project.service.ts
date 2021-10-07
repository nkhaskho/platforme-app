import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/employees/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API_URL = environment.API_URL;
  projects: Record<string,any> = {};

  constructor(private http: HttpClient) { }

  async updateProjectsCache() {
    await this.getAllProjects().subscribe(
      response => {
        console.log(response);
        response.forEach(project => {
          this.projects[project.id.toString()] = project.name
        });
      }
    );
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }


  async getProjectsCache() {
    await this.updateProjectsCache();
    this.projects = await JSON.parse(localStorage.getItem("projects") || "{}");
    return this.projects;
  }

  getAllProjects() {
    return this.http.get<Project[]>(`${this.API_URL}/employees/projects/`);
  }

  getProjectById(projectId: number) {
    return this.http.get<Project>(`${this.API_URL}/employees/projects/${projectId}`);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(`${this.API_URL}/employees/projects/${project.id}/`, project);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.API_URL}/employees/projects/`, project);
  }

  deleteProject(projectId: any) {
    return this.http.delete<any>(`${this.API_URL}/employees/projects/${projectId}`);
  }

}
