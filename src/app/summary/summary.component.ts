import { Component, OnInit } from '@angular/core';
import {Shipping, shippingdata} from '../shipping';
import { Payment, paymentdata } from '../payment';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  shippingdata = shippingdata;
  paymentdata = paymentdata;
  constructor() { }

  ngOnInit(): void {
  }

}
