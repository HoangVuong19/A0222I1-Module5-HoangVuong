import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accountInfo: FormGroup;
  constructor() {
    this.accountInfo = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitAccount() {
    if (this.accountInfo.valid){
      console.log(this.accountInfo);
    }
  }
}
