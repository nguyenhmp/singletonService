import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from "app/product/product.component";
import { ProductEditComponent } from "app/product-edit/product-edit.component";
import { ProductCreateComponent } from "app/product-create/product-create.component";
const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'products/new', component: ProductCreateComponent },
    { path: 'products/:idx', component: ProductEditComponent },            
];
export const routing = RouterModule.forRoot(APP_ROUTES);