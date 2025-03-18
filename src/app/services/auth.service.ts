import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Adjust API endpoint if necessary

  constructor(private http: HttpClient) {}

  register(
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    currencyPreference: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      fullName,
      email,
      password,
      confirmPassword,
      currencyPreference,
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // Check if the user is authenticated by checking for the token in localStorage
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');  // Checks if token exists in localStorage
  }

  // Store token in localStorage after login
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove token from localStorage on logout
  logout(): void {
    localStorage.removeItem('token');
  }
}
