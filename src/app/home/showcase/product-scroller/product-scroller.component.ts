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
        console.log(this.slides[0].title);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // slides = [
  //   {
  //     img: '../../../../assets/products/mobiles/1/1.jpg',
  //     title: 'first product title',
  //     desc: 'first product desc',
  //   },

  //   {
  //     img: '../../../../assets/products/pc/1/1.webp',
  //     title: 'second product title',
  //     desc: 'second product desc',
  //   },
  //   {
  //     img: '../../../../assets/products/mobiles/2/1.jpg',
  //     title: 'third product title',
  //     desc: 'third product desc',
  //   },
  //   {
  //     img: '../../../../assets/products/shoes/1/3.jpg',
  //     title: 'fourth product title',
  //     desc: 'fourth product desc',
  //   },
  //   {
  //     img: '../../../../assets/products/mobiles/4/1.jpg',
  //     title: 'fifth product title',
  //     desc: 'fifth product desc',
  //   },
  //   {
  //     img: '../../../../assets/products/mobiles/3/1.jpg',
  //     title: 'sixth product title',
  //     desc: 'sixth product desc',
  //   },
  // ];
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

  slickInit(e: any) {
    console.log('slick initialized');
    // console.log(e)
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
