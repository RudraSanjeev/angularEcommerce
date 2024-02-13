import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import e from 'express';
import { Observable, catchError, tap, throwError } from 'rxjs';

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

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getAllCarts(): Observable<Cart> {
    return this.http
      .get<Cart>(this.API_URI, {
        headers: {
          token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
            'accessToken'
          )}`,
        },
      })
      .pipe(
        tap((res) => {
          let cartCounter = 0;
          res.items.forEach((ele) => {
            cartCounter += ele.quantity;
          });
          localStorage.setItem('cartCounter', JSON.stringify(cartCounter));
          // this.counter = res.items.length;
        })
      );
  }
  addCart(cartData: { items: CartItem }) {
    return this.http
      .post(this.API_URI, cartData, {
        headers: {
          token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
            'accessToken'
          )}`,
        },
      })
      .pipe(
        tap((res) => {
          const counter = JSON.parse(localStorage.getItem('cartCounter')) || 0;
          localStorage.setItem(
            'cartCounter',
            JSON.stringify(counter + cartData.items.quantity)
          );
        }),
        catchError((error) => {
          console.error('Error adding cart:', error);
          return error;
        })
      );
  }

  updateCart(productId: string, quantity: number) {
    return this.http
      .patch(
        this.API_URI + productId,
        { items: { quantity } },
        {
          headers: {
            token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
              'accessToken'
            )}`,
          },
        }
      )
      .pipe(
        tap((res) => {
          const cartCounter =
            this.document.defaultView?.localStorage?.getItem('cartCounter');
          this.document.defaultView?.localStorage?.setItem(
            'cartCounter',
            JSON.stringify(JSON.parse(cartCounter) - quantity)
          );
        })
      );
  }
}
