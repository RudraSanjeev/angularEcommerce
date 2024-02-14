import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'SingleOrder',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './single-order.component.html',
  styleUrl: './single-order.component.scss',
})
export class SingleOrderComponent {
  constructor(private orderService: OrderService) {}

  @Input() orderStatus: string;
  @Input() total: number;
  @Input() orderItems: any[];

  ngOnInit() {
    console.log(this.orderItems[0].productId.img);
  }
}
