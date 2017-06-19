import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  products = [];
  constructor() { 
    console.log("I created a productsService");
  }
  getProducts(){
    return this.products;
  }
  create(newProduct){
    this.products.push(newProduct);
  }
  getOneProduct(idx){
    return this.products[idx]
  }

}
