import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractComponent} from "./contract/contract.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {ContractEditComponent} from "./contract/contract-edit/contract-edit.component";
import {ContractInfoComponent} from "./contract/contract-info/contract-info.component";


const routes: Routes = [
  {path: '', component: ContractComponent},
  {path: 'create', component: ContractCreateComponent},
  {path: 'edit/:id', component: ContractEditComponent},
  {path: 'info/:id', component: ContractInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
