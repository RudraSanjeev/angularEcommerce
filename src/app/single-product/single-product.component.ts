import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductscrollerService } from '../home/showcase/product-scroller/productscroller.service';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
interface Product {
  map(arg0: (item: any) => { img: any; title: any; desc: any }): unknown;
  forEach(arg0: (element: any) => void): any;
  title: string;
  category: string[];
  color: string[];
  currency: string;
  desc: string;
  img: string[];
  inStock: boolean;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent {
  product: Product;
  currImg: string;
  quantity: string = '1';
  productId: string;
  // testId$ = this.routes.params.pipe(map((p) => p['testId']));
  constructor(
    private productService: ProductscrollerService,
    private cartService: CartService,
    private routes: ActivatedRoute
  ) {}

  // this.routes.params.pipe(map((p) => p['productId'])).subscribe({
  //   next: (res)=>{
  //     this.productId = res;
  //   }
  // })

  setCurrentImg(img: string) {
    this.currImg = img;
  }

  ngOnInit() {
    this.routes.params.pipe(map((p) => p['productId'])).subscribe((res) => {
      this.productId = res;
      // console.log(this.productId);
    });
    this.getSingleProduct();
    // this.setCurrentImg;
    console.log(this.productId);
  }

  getSingleProduct() {
    if (this.productId) {
      this.productService.getSingleProduct(this.productId).subscribe({
        next: (response: Product) => {
          this.product = response;
          this.currImg = this.product.img[0];
          // console.log(this.product);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }

  addToCart() {
    this.cartService
      .addCart({
        items: {
          productId: this.productId,
          quantity: JSON.parse(this.quantity),
        },
      })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  setQuantity(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    // console.log('Selected Quantity:', selectedValue);
    this.quantity = selectedValue;
    console.log(this.quantity);
  }
}
