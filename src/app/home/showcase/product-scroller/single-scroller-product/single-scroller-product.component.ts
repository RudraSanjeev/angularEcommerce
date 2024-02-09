import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-scroller-product',
  standalone: true,
  imports: [],
  templateUrl: './single-scroller-product.component.html',
  styleUrl: './single-scroller-product.component.scss',
})
export class SingleScrollerProductComponent {
  @Input() title: string = 'title';
  @Input() price: string = '0';
  @Input() img: string = '';
}
