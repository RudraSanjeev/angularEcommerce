import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'SingleCart',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './single-cart.component.html',
  styleUrl: './single-cart.component.scss',
})
export class SingleCartComponent {
  constructor(private cartService: CartService) {}

  @Input() img: string =
    'https://res.cloudinary.com/drdard8os/image/upload/v1704776897/mernEcomerce/product/mobiles/4/1_nduutd.jpg';
  @Input() desc: string = 'description';
  @Input() inStock: boolean = true;
  @Input() price: number = 4324234;
  @Input() quantity: number = 1;
  @Input() productId: string;
  @Input() subTotal: number;
  deletedProductId: string = '';
  selectedQuantity: number = this.quantity;
  setSelectedQty(option: any) {
    this.selectedQuantity = JSON.parse(option.target.value);
  }

  updateCart() {
    this.cartService
      .updateCart(this.productId, this.selectedQuantity)
      .subscribe({
        next: (res: any) => {
          console.log('updated');
          this.quantity = this.selectedQuantity;
          this.subTotal = res.totalPrice;
          // console.log(this.subTotal);
          this.sendSubTotal();
        },
        error: (err) => {
          console.log(err);
        },
      });
    // console.log(this.selectedQuantity);
  }

  deleteCart() {
    this.cartService.deleteCart(this.productId).subscribe({
      next: (res) => {
        console.log('deleted');
        this.subTotal = this.subTotal - this.price * this.quantity;
        this.sendSubTotal();
        this.sendDeletedProductId();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  @Output() subTotalEvent = new EventEmitter();
  @Output() deleteProductIdEvent = new EventEmitter();
  sendSubTotal() {
    this.subTotalEvent.emit(this.subTotal);
  }

  sendDeletedProductId() {
    this.deleteProductIdEvent.emit(this.productId);
  }
}
