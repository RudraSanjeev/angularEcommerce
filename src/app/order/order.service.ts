import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  // createdAt: Date;
  // updatedAt: Date;
}

interface OrderItem {
  productId: string;
  quantity: number;
  _id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private API_URI = `http://localhost:8000/api/orders/`;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getAllOrders(): Observable<Order> {
    return this.http.get<Order>(this.API_URI, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }
  addOrder(OrderData: { paymentMode: string }): Observable<any> {
    return this.http.post(this.API_URI, OrderData, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }
}
