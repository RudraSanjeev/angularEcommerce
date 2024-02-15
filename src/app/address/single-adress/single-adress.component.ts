import { Component, Input } from '@angular/core';
import { Address } from '../address.service';

@Component({
  selector: 'app-single-adress',
  standalone: true,
  imports: [],
  templateUrl: './single-adress.component.html',
  styleUrl: './single-adress.component.scss',
})
export class SingleAdressComponent {
  @Input() address: Address;
}
