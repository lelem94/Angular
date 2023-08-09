import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterAuth } from './register-auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(obj: RegisterAuth) {
    return this.http.post(environment.urlAPI + 'register', obj);
  }

  signin(obj: RegisterAuth) {
    return this.http.post(environment.urlAPI + 'login', obj);
  }
}
