import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContractInfoComponent } from './contract/contract-info/contract-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgpSortModule} from "ngp-sort-pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    ContractCreateComponent,
    ContractEditComponent,
    ContractInfoComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        NgpSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
