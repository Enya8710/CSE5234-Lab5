import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  ShippingForm = this.formBuilder.group({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
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
