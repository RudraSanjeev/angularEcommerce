import { Component, Input } from '@angular/core';

@Component({
  selector: 'ProceedToPay',
  standalone: true,
  imports: [],
  templateUrl: './proceed-to-pay.component.html',
  styleUrl: './proceed-to-pay.component.scss',
})
export class ProceedToPayComponent {
  @Input() subTotal = 23432;
  @Input() items = 8;
}
