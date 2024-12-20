import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  baseURL = 'http://localhost:5275/api/Users';

  constructor(private http: HttpClient) {}

  registerUser(usuario: User, captchaToken: string) {
    const payload = { user: usuario, captchaToken };
    return this.http.post<User>(this.baseURL, payload);
  }
}
