import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Payment, paymentdata } from '../payment';
import { Product, products } from '../products';
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  paymentdata = paymentdata;
  products = products;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  submit():void {

  }

}
