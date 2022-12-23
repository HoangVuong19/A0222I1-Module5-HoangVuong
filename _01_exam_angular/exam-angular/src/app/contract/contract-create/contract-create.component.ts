import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../../../service/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  formCreate: FormGroup;

  constructor(private contractService: ContractService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group(
      {
        code: ['', [Validators.required]],
        createDate: ['', [Validators.required]],
        content: ['', [Validators.required]],
        price: ['', [Validators.required]],
        type: ['', [Validators.required]]
      });
  }

  createContract() {
    const contract = this.formCreate.value;
    if (this.formCreate.valid) {
      this.contractService.saveContract(contract).subscribe(
        () => {
          alert('tạo thành công');
          this.router.navigateByUrl('/');
        });
    } else {
      alert('tạo thất bại');
    }
  }
}
