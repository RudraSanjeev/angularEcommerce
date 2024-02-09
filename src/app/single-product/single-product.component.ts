import { Component, Input } from '@angular/core';
import { ProductscrollerService } from '../home/showcase/product-scroller/productscroller.service';
interface Product {
  map(arg0: (item: any) => { img: any; title: any; desc: any }): unknown;
  forEach(arg0: (element: any) => void): any;
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
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent {
  product: Product;

  @Input() productId: string = '659cd6e37de1b5cd3efa1cef';
  constructor(private productService: ProductscrollerService) {}

  ngOnInit() {
    if (this.productId) {
      console.log('called api');
      this.productService.getSingleProduct(this.productId).subscribe({
        next: (response: Product) => {
          this.product = response;
          console.log(this.product);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
