import { Injectable, signal } from '@angular/core';
import { User } from '../app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private loggedInUser = signal<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.loggedInUser.set(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Hibás user adatok a localStorage-ben:", error);
      localStorage.removeItem('user'); 
    }
  }

  register(nev: string, email: string, jelszo: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { nev, email, jelszo});
  }

  login(nev: string, jelszo: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { nev, jelszo}).pipe(
      tap(user => {
        this.loggedInUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/aloldal']);
      })
    );
  }

  logout(): void {
    this.loggedInUser.set(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUser() {
    return this.loggedInUser;
  }
}
