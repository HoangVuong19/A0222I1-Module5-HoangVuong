import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/Contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  contract: Contract;
  constructor(private contractService: ContractService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.contractService.getAllContracts().subscribe(contract => {
      this.contracts = contract;
    });
  }
  deleteContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.contract = contract;
    });
  }
}
