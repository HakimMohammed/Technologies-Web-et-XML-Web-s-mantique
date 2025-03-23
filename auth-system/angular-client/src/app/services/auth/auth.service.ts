import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { SignInFormData } from '../../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUser: User | null = null;

  constructor(private httpClient: HttpClient) { }
  
  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  signIn(data: SignInFormData): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}?email=${data.email}`);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  signOut() {
    this.currentUser = null;
  }
}
