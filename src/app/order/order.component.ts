import { Component, Inject, SimpleChange } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from './order.service';
import { SingleOrderComponent } from './single-order/single-order.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, SingleOrderComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  order: any;
  // cartTotalItems: number;
  // receivedSubTotal: number;
  // receivedProductId: string;
  // receiveSubTotal($event: string) {
  //   // this.receivedSubTotal = $event;
  //   console.log('subtotal from parent called ');
  //   console.log($event);
  //   this.receivedSubTotal = JSON.parse($event);
  //   // console.log(this.receivedSubTotal);
  // }

  // receiveDeletedProductId($event: any) {
  //   this.cart.items = this.cart.items.filter((item) => {
  //     return item.productId._id !== $event;
  //   });
  //   console.log(this.cart.items);
  // }

  constructor(
    private orderService: OrderService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    if (this.document.defaultView?.localStorage?.getItem('accessToken'))
      this.getAllOrders();
  }

  // ngOnChanges() {
  //   if (this.receivedSubTotal) {
  //     console.log(this.receiveSubTotal);
  //   }
  // }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (response: any) => {
        this.order = response;
        console.log(this.order);
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // console.log(localStorage.getItem('cartCounter'));
  }
}
