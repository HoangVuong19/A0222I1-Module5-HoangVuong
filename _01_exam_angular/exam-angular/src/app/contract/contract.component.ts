import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/Contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  contract: Contract = {};
  page: number = 1;
  totalRecords: number = 0;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAllContracts().subscribe(contract => {
      this.contracts = contract;
      this.totalRecords = contract.length;
    });
  }

  deleteById(item: Contract) {
    this.contract = item;
  }

  delete() {
    this.contractService.deleteContract(this.contract.id).subscribe(() => {
      this.contract = {};
      document.getElementById('modelId').click();
      this.ngOnInit();
    });
  }

  pageChanged(event: number) {
    this.page = event;
  }
}
