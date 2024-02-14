import { Component, Inject, SimpleChange } from '@angular/core';
import { CartService } from './cart.service';
import { SingleCartComponent } from './single-cart/single-cart.component';
import { ProceedToPayComponent } from './proceed-to-pay/proceed-to-pay.component';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SingleCartComponent, ProceedToPayComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: any;
  cartTotalItems: number;
  receivedSubTotal: number;
  receivedProductId: string;
  receiveSubTotal($event: string) {
    // this.receivedSubTotal = $event;
    console.log('subtotal from parent called ');
    console.log($event);
    this.receivedSubTotal = JSON.parse($event);
    // console.log(this.receivedSubTotal);
  }

  receiveDeletedProductId($event: any) {
    this.cart.items = this.cart.items.filter((item) => {
      return item.productId._id !== $event;
    });
    console.log(this.cart.items);
  }

  constructor(
    private cartService: CartService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    if (this.document.defaultView?.localStorage?.getItem('accessToken'))
      this.getAllCarts();
    // console.log(this.cartCounter);
  }

  ngOnChanges() {
    if (this.receivedSubTotal) {
      console.log(this.receiveSubTotal);
    }
  }

  getAllCarts() {
    this.cartService.getAllCarts().subscribe({
      next: (response: any) => {
        this.cart = response;
        this.receivedSubTotal = response.totalPrice;
        // console.log(this.cart);
        this.cart.items.forEach((element: any) => {
          this.cartTotalItems += element.quantity;
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // console.log(localStorage.getItem('cartCounter'));
  }
}
