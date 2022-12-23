import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../../../service/contract.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  formEdit: FormGroup;
  id: number;
  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getContract(this.id);
    });
  }

  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.formEdit = this.formBuilder.group(
        {
          code: [contract.code, [Validators.required]],
          createDate: [contract.createDate, [Validators.required]],
          content: [contract.content, [Validators.required]],
          price: [contract.price, [Validators.required]],
          type: [contract.type, [Validators.required]]
        });
    });
  }

  editContract(id: number) {
    const contract = this.formEdit.value;
    if (this.formEdit.valid) {
      this.contractService.updateContract(id, contract).subscribe(
        () => {
          alert('sửa thành công');
          this.router.navigateByUrl('/');
        });
    } else {
      alert('sửa thất bại');
    }
  }
}
