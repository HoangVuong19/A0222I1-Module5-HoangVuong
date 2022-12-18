import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('inputCode')
  code: string;

  constructor() { }

  ngOnInit(): void {
  }

}
