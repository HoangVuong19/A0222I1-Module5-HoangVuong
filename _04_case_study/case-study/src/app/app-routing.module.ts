import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {BodyComponent} from './body/body.component';
import {CustomerComponent} from './customer/customer.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'customer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
