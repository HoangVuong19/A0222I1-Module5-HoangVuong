import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { AppRoutingModule} from './app-routing.module';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { DeleteFacilityComponent } from './facility/delete-facility/delete-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { BodyComponent } from './body/body.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    DeleteCustomerComponent,
    ContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
