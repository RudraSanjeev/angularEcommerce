import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  map(arg0: (item: any) => { img: any; title: any; desc: any }): unknown;
  forEach(arg0: (element: any) => void): any;
  category: string[];
  color: string[];
  currency: string;
  desc: string;
  img: string[];
  inStock: boolean;
  price: number;
  quantity: number;
}
[];

@Injectable({
  providedIn: 'root',
})
export class ProductscrollerService {
  private API_URI = `http://localhost:8000/api/products/`;
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get<Product>(this.API_URI + 'all');
  }

  getSingleProduct(productId: string) {
    return this.http.get(this.API_URI + productId);
  }
}
