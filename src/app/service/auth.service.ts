import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  _id: string;
  accessToken: string;
  createdAt: string;
  email: string;
  fullName: string;
  passwordResetToken: string | null;
  phoneNumber: string;
  refreshToken: string;
  role: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URI = `http://localhost:8000/api/auth`;
  isLoggedIn = new EventEmitter<boolean>();
  username: string = '';
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(this.API_URI + '/login', { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('userId', res._id);
          localStorage.setItem('username', res.fullName);
          this.isLoggedIn.emit(true);
        })
      );
  }
}
