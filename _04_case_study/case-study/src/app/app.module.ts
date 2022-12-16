import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import {AppRoutingModule} from './app-routing.module';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { DeleteFacilityComponent } from './facility/delete-facility/delete-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { BodyComponent } from './body/body.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    EditFacilityComponent,
    DeleteFacilityComponent,
    CreateFacilityComponent,
    BodyComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
