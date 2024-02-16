import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  loadStripe,
  Stripe,
  StripeCardElement,
  StripeElements,
} from '@stripe/stripe-js';
import { OrderService } from '../order/order.service';
import { CommonModule, DOCUMENT, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

interface Message {
  name: string;
  type: boolean;
}
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  clientSecret: string | null = null;
  message: Message = {
    name: '',
    type: false,
  };
  isLoading = false;
  card: StripeCardElement;
  @ViewChild('cardElement') cardElement: ElementRef;

  constructor(
    private orderService: OrderService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  addOrder() {
    this.orderService
      .addOrder({
        paymentMode: 'Cash on delivery',
        deliveryAddressId: '65a11897e97584a2f5ab21dd',
      })
      .subscribe({
        next: (response: any) => {
          this.clientSecret = response.newOrder.paymentToken;
          this.createCardElement();
          console.log(response);
        },
        error: (error: any) => {
          console.error('Error fetching client secret:', error);
        },
      });
  }

  createCardElement() {
    this.card = this.elements.create('card');
    this.card.mount(this.cardElement.nativeElement);
  }

  async handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    if (!this.stripe || !this.elements || !this.clientSecret) {
      return;
    }

    this.isLoading = true;

    const { error, paymentIntent } = await this.stripe.confirmCardPayment(
      this.clientSecret,
      {
        payment_method: {
          card: this.card,
        },
      }
    );

    if (error) {
      this.message.name = error.message;
      this.message.type = false;
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      this.message.name = 'Payment succeeded!';
      this.message.type = true;
      this.document.defaultView?.localStorage?.removeItem('cartCounter');
      this.router.navigate(['/orders']);
    } else {
      this.message.name = 'Payment failed.';
      this.message.type = false;
    }

    this.isLoading = false;
  }

  async ngOnInit() {
    this.stripe = await loadStripe(
      'pk_test_51OHngASIg5uZxo3zYPaBcaFDcBglgldAeg7HXOYtGpVz6mElNmw9Jh5RVXlIhAZM4TakxUVbCmrtMwTZ2gAEzBOy00tVRvTU6d'
    );
    this.elements = this.stripe?.elements();
    this.addOrder();
  }
}
