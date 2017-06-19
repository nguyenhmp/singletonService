import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsService } from "app/products.service";
import { ProductCreateComponent } from './product-create/product-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
