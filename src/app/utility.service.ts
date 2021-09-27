import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Product, products } from './products';
import { shipping } from './shipping';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  constructor(private cartService: CartService) { }

  getTotalPrice(){
      let price = 0;
      this.cartService.items.forEach((product) => {
          price += product.price * product.quantity;
      });
      return price;
  }

}