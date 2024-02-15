import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface Address {
  _id: string;
  userId?: string;
  fullName: string;
  mobileNumber: string;
  houseNo: string;
  landmark: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  isCurrent?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  API_URI = 'http://localhost:8000/api/address/';

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getAllAddress() {
    return this.http.get(this.API_URI, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }

  addAddress(newAddress: Address) {
    return this.http.post(this.API_URI, newAddress, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }

  updateAddress(addressField: any) {
    return this.http.patch(this.API_URI, addressField, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }

  deleteAddress(addressId: string) {
    return this.http.delete(this.API_URI + addressId, {
      headers: {
        token: `Bearer ${this.document.defaultView?.localStorage?.getItem(
          'accessToken'
        )}`,
      },
    });
  }
}
