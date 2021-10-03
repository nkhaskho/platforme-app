import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/employees/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get<Project[]>(`${this.API_URL}/projects`);
  }

  getProjectById(projectId: number) {
    return this.http.get<Project>(`${this.API_URL}/projects/${projectId}`);
  }

}
