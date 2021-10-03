import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/employees/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }

  getUsersByProject(projectId: number) {
    return this.http.get<User[]>(`${this.API_URL}/users?project=${projectId}`);
  }

}
