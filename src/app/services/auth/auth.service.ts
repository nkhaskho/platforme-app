import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/auth/login-response';
import { User } from 'src/app/models/employees/user';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../../models/login-form';
import { UserService } from '../employees/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL;
  private loggedUser = new BehaviorSubject('');
  currentLoggedUser = this.loggedUser.asObservable();

  constructor(private http: HttpClient, private userService: UserService) { }
  
  changeLoggedUser(username: string) {
    this.loggedUser.next(username);
  }

  authenticate(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/`, loginForm);
  }

  async newLoggedUser(username: string, accessToken: string) {
    localStorage.setItem("user", username);
    let user = new User(); 
    await this.userService.getUserByUsername(username).subscribe(
      res => {
        localStorage.setItem("userId", res[0].id.toString());
        localStorage.setItem("project", res[0].project.toString());
        localStorage.setItem("access", accessToken);
        localStorage.setItem("role", res[0].role);
        this.changeLoggedUser(username);
      }
    )
    //user = this.userService.getUserByUsername(username).then(res => user = res.)
    
    
  }

  logOutUser() {
    localStorage.setItem("user", "");
    localStorage.setItem("userId", "0");
    localStorage.setItem("role", "TEAM_MEMBER");
    localStorage.setItem("access", "");
  }
  
}
