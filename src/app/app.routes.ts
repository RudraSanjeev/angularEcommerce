import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'products/:productId',
    title: 'product',
    component: SingleProductComponent,
  },
];
