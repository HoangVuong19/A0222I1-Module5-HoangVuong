import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {DictionayPageComponent} from "./dictionary/dictionay-page/dictionay-page.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";


const routes: Routes = [
  // {path: 'detail/:index', component: DictionaryDetailComponent},
  // {path: '', component: DictionayPageComponent}
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
