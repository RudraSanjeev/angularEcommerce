import { Component } from '@angular/core';
import { SingleAdressComponent } from './single-adress/single-adress.component';
import { Address, AddressService } from './address.service';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
@Component({
  selector: 'app-address',
  standalone: true,
  imports: [SingleAdressComponent, AddNewAddressComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  addresses: Address[];
  constructor(private addressService: AddressService) {}
  getAllAddress() {
    this.addressService.getAllAddress().subscribe({
      next: (res: Address[]) => {
        console.log(res);
        this.addresses = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.getAllAddress();
  }
}
