import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {DictionayPageComponent} from "./dictionary/dictionay-page/dictionay-page.component";


const routes: Routes = [
  {path: 'detail/:index', component: DictionaryDetailComponent},
  {path: '', component: DictionayPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
