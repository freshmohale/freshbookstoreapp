import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = '/register'; // Replace with the appropriate URL for your backend
  private getUsersUrl = '/users'; // Replace with the appropriate URL to get users

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password };
    return this.http.post(this.registerUrl, body);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.getUsersUrl);
  }
}
