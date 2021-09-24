import { Component, OnInit } from '@angular/core';
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
  price: number;
  constructor(private utilityService: UtilityService) {
  this.price = utilityService.getTotalPrice();
   }

  ngOnInit(): void {
  }

}
