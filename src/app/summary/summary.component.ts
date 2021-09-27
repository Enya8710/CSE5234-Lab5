import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { payment } from '../payment';
import { products } from '../products';
import { shipping } from '../shipping';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  products = products;
  shipping = shipping;
  payment = payment;
  price: number;
  constructor(private utilityService: UtilityService, private cartService: CartService) {
    this.price = utilityService.getTotalPrice();
    cartService.session_open = false;
    this.products = cartService.items;
  }

  ngOnInit(): void {
  }


}
