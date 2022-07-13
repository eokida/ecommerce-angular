import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './core/components/product-info/product-info.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
