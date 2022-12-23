import {Component, Input, OnInit} from '@angular/core';
import {Contract} from "../../../model/Contract";
import {ContractService} from "../../../service/contract.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent implements OnInit {
  contract: Contract;
  id: number;
  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getContract(this.id);
    });
  }

  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.contract = contract;
    });
  }
}
