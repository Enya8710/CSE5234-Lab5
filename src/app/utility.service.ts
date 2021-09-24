import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { shipping } from './shipping';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  constructor() { }

  getTotalPrice(){
      let price = 0;
      products.forEach((product, index) => {
          price += product.price * product.quantity;
      });
      return price;
  }

}