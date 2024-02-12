import { Component } from '@angular/core';
import { Cart, CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getAllCarts();
    // console.log(this.cartCounter);
  }

  getAllCarts() {
    this.cartService.getAllCarts().subscribe({
      next: (response: Cart) => {
        this.cart = response;
        console.log(this.cart);
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // console.log(localStorage.getItem('cartCounter'));
  }
}
