import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/auth/login-response';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { 
    
  }

  authenticate(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/`, loginForm);
  }

  newLoggedUser(username: string, accessToken: string) {
    localStorage.setItem("user", username);
    localStorage.setItem("access", accessToken);
  }
  
}
