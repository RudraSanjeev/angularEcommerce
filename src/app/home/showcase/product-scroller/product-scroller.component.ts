import { Component } from '@angular/core';
import { SingleScrollerProductComponent } from './single-scroller-product/single-scroller-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Product, ProductscrollerService } from './productscroller.service';

@Component({
  selector: 'app-product-scroller',
  standalone: true,
  imports: [SingleScrollerProductComponent, SlickCarouselModule],
  templateUrl: './product-scroller.component.html',
  styleUrl: './product-scroller.component.scss',
})
export class ProductScrollerComponent {
  constructor(private productService: ProductscrollerService) {}
  // products: any[] =
  slides: any;

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response: Product) => {
        this.slides = response;
        // console.log(this.slides[0].title);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized');
  //   // console.log(e)
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
}

// (init)="slickInit($event)"
// (breakpoint)="breakpoint($event)"
// (afterChange)="afterChange($event)"
// (beforeChange)="beforeChange($event)"
