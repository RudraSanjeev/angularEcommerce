import { Component } from '@angular/core';
import { BannerComponent } from './showcase/banner/banner.component';
import { ProductScrollerComponent } from './showcase/product-scroller/product-scroller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ProductScrollerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
