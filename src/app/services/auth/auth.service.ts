import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/auth/login-response';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL;
  private loggedUser = new BehaviorSubject('');
  currentLoggedUser = this.loggedUser.asObservable();

  constructor(private http: HttpClient) { }
  
  changeLoggedUser(username: string) {
    this.loggedUser.next(username);
  }

  authenticate(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/`, loginForm);
  }

  newLoggedUser(username: string, accessToken: string) {
    localStorage.setItem("user", username);
    localStorage.setItem("userId", "2");
    localStorage.setItem("access", accessToken);
    this.changeLoggedUser(username);
  }

  logOutUser() {
    localStorage.setItem("user", "");
    localStorage.setItem("userId", "0");
    localStorage.setItem("access", "");
  }
  
}
