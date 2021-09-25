import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit():void {
    console.log(products);
  }

  ngOnDispose(){
    console.log(products);
  }

  submit(){
    console.log(products);
  }
}
