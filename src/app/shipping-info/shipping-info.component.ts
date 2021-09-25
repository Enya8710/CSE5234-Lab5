import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {Shipping, shippingdata} from '../shipping';
@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  
  shippingdata = shippingdata;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit():void {

  }
  submit():void{

  }

}
