import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  session_open = false;

  addToCart(name: string, quantity: number) {
    this.items.forEach((item) => {
      if(item.name === name){
        item.quantity += quantity
      }
    })
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    if(!this.session_open){
      this.items = [];
      products.forEach(item => {
        this.items.push({...item});
      })
      this.session_open = true;
    }
    return this.items;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
