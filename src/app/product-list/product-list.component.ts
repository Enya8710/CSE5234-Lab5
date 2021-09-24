import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

}
