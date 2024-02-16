import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressFormComponent } from './address/address-form/address-form.component';

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
  {
    path: 'carts',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'orders',
    component: OrderComponent,
    title: 'Order',
  },
  {
    path: 'address',
    component: AddressComponent,
    title: 'address',
  },
  {
    path: 'checkout',
    component: PaymentComponent,
    title: 'checkout',
  },
  {
    path: 'address/new',
    component: AddressFormComponent,
    title: 'new address',
  },
];
