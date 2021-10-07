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

  addNewUser(user: User) {
    return this.http.post<User>(`${this.API_URL}/employees/users/`, user);
  }

  getUsersByProject(projectId: any) {
    return this.http.get<User[]>(`${this.API_URL}/employees/users/?project=${projectId}`);
  }

  deleteUserById(userId: number) {
    return this.http.delete(`${this.API_URL}/employees/users/${userId}/`);
  }

  updateUserById(user: User) {
    return this.http.put<User>(`${this.API_URL}/employees/users/${user.id}/`, user);
  }

}
