import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:{name:"", price:0.0};
  
  constructor(private _ProductsService:ProductsService, private _Router:Router, private _ActivatedRoute:ActivatedRoute) { 
    this._ActivatedRoute.params.subscribe(param => {
      this.product = this._ProductsService.getOneProduct(param.idx);
      if(!this.product){
        this.product = {name:"", price:0.0};        
      }
    })
  }

  ngOnInit() {
  }
  


}