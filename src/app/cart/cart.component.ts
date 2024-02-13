import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { SingleCartComponent } from './single-cart/single-cart.component';
import { ProceedToPayComponent } from './proceed-to-pay/proceed-to-pay.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SingleCartComponent, ProceedToPayComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: any;
  cartTotalItems: number;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getAllCarts();
    // console.log(this.cartCounter);
  }

  getAllCarts() {
    this.cartService.getAllCarts().subscribe({
      next: (response: any) => {
        this.cart = response;
        // console.log(this.cart);
        this.cart.items.forEach((element) => {
          this.cartTotalItems += element.quantity;
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // console.log(localStorage.getItem('cartCounter'));
  }

  // updateCart(productId: string, quantity: number) {
  //   this.cartService.updateCart(productId, quantity);
  // }
}
