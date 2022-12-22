import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractEditComponent} from './contract/contract-edit/contract-edit.component';
import {ContractComponent} from './contract/contract.component';


const routes: Routes = [
  {path: '', component: ContractComponent},
  {path: 'create', component: ContractCreateComponent},
  {path: 'edit/:id', component: ContractEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
