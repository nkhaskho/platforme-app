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
    return this.http.get<User[]>(`${this.API_URL}/employees/users/`);
  }

  getUserById(userId: number) {
    return this.http.get<User>(`${this.API_URL}/employees/users/${userId}`);
  }

  getUsersByProject(projectId: number) {
    return this.http.get<User[]>(`${this.API_URL}/employees/users/users?project=${projectId}`);
  }

}
