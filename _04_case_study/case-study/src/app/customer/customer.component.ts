import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] | undefined;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  private getAllCustomer() {
    this.customers = this.customerService.customer;
  }

}
