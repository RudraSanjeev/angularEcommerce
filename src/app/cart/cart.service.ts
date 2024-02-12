import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  // createdAt: Date;
  // updatedAt: Date;
}

interface CartItem {
  productId: string;
  quantity: number;
  _id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private API_URI = `http://localhost:8000/api/carts`;
  // counter: number = 0;

  constructor(private http: HttpClient) {}

  getAllCarts(): Observable<Cart> {
    return this.http
      .get<Cart>(this.API_URI, {
        headers: { token: `Bearer ${localStorage.getItem('accessToken')}` },
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('cartCounter', JSON.stringify(res.items.length));
          // this.counter = res.items.length;
        })
      );
  }
  addCart(cartData: { items: CartItem }) {
    return this.http
      .post(this.API_URI, cartData, {
        headers: { token: `Bearer ${localStorage.getItem('accessToken')}` },
      })
      .pipe(
        tap((res) => {
          const counter = JSON.parse(localStorage.getItem('cartCounter')) || 0;
          localStorage.setItem('cartCounter', JSON.stringify(counter + 1));
        })
      );
  }
}
