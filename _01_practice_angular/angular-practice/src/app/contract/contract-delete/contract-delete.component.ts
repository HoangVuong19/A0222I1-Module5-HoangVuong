import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Contract} from '../../../model/Contract';
import {ContractService} from '../../../service/contract.service';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('contractDelete') contract: Contract;
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {}

  // delete() {
  //   this.contractService.deleteContract(this.contract.id).subscribe(() => {
  //     document.getElementById('modelId').click();
  //   });
  // }
}
