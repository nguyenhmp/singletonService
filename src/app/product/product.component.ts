import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  constructor(private _ProductsService:ProductsService) { 
    this.products = this._ProductsService.getProducts();
  }

  ngOnInit() {
  }
}
