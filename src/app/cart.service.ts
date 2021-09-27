import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(name: string, quantity: number) {
    let id = 0;
    this.items.forEach((item) => {
      if(item.name === name){
        id = item.id;
      }
    })
    this.items[id].quantity += quantity;
    console.log(this.items[id], this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    products.forEach(item => {
      this.items.push(item);
    })
    return this.items;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }
}
