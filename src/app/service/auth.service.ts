import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';

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
  cartCounter: number;
  constructor(private http: HttpClient, private cartService: CartService) {}
  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(this.API_URI + '/login', { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('userId', res._id);
          localStorage.setItem('username', res.fullName);
          this.isLoggedIn.emit(true);
        }),
        finalize(() => {
          this.updateCartCounter();
        })
      );
  }

  private updateCartCounter() {
    this.cartService.getAllCarts().subscribe({
      next: (res) => {
        let totalQuantity = 0;
        res.items.forEach((element) => {
          totalQuantity += element.quantity;
        });

        this.cartCounter = totalQuantity;

        localStorage.setItem('cartCounter', JSON.stringify(totalQuantity));
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  logout() {
    window.localStorage.clear();
  }
}
