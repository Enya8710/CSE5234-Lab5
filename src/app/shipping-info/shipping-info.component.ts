import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
import { shipping } from '../shipping';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  shipping = shipping;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    console.log(products);
  }

  ngOnInit(): void {
  }
  onSubmit():void {

  }

}
