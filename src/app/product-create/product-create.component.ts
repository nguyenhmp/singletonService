import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = {name:"", price:"0.0"};
  constructor(private _ProductsService:ProductsService , private _router:Router) { 
  }

  ngOnInit() {
  }
  createProduct(){
    this._ProductsService.create(this.product);
    this._router.navigate(['/products']);
  }
}
