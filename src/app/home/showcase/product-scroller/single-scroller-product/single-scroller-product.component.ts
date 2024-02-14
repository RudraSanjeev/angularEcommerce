import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-scroller-product',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './single-scroller-product.component.html',
  styleUrl: './single-scroller-product.component.scss',
})
export class SingleScrollerProductComponent {
  @Input() title: string = 'title';
  @Input() price: string = '0';
  @Input() img: string = '';
}
