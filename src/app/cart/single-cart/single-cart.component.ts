import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'SingleCart',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './single-cart.component.html',
  styleUrl: './single-cart.component.scss',
})
export class SingleCartComponent {
  constructor() {}

  @Input() img: string =
    'https://res.cloudinary.com/drdard8os/image/upload/v1704776897/mernEcomerce/product/mobiles/4/1_nduutd.jpg';
  @Input() desc: string = 'description';
  @Input() inStock: boolean = true;
  @Input() price: number = 4324234;
  @Input() quantity: number = 1;
}
