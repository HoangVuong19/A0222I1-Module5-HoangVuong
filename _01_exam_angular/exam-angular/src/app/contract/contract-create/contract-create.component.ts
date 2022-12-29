import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ContractService} from "../../../service/contract.service";
import {Router} from "@angular/router";
import * as moment from "moment";
import {now} from "moment";

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

function checkPresentAndFuture(control: AbstractControl): ValidationErrors {
  let dayCheck = moment(control.value);
  let dayNow = moment(new Date(now()));
  if (moment.duration(dayCheck.diff(dayNow)).days() < 0) {
    return {presentAndFuture: true};
  }
  return null;
}

function check18Age(control: AbstractControl): ValidationErrors {
  let dayCheck = moment(control.value);
  let dayNow = moment(new Date(now()));
  if (moment.duration(dayNow.diff(dayCheck)).asYears() < 18) {
    return {small18: true};
  }
  return null;
}
