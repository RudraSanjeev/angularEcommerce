import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  slides = [
    {
      img: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg',
    },
    {
      img: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b075282ca13be880.jpg',
    },
    {
      img: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0c706f11307528da.jpg',
    },
    {
      img: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
