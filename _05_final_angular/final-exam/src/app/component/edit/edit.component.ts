import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import * as moment from "moment";
import {now} from "moment";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit: FormGroup;

  id: number | undefined;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getBook(this.id);
    });
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(data => {
      this.formEdit = this.formBuilder.group(
        {
          id: [data.id],
          cusId: [data.cusId],
          cusName: [data.cusName, [Validators.required, Validators.pattern('^\\D+$')]],
          createDate: [data.createDate, [Validators.required]],
          reTime: [data.reTime, [Validators.required, checkPresentAndFuture]],
          deadTime: [data.deadTime, [Validators.required]],
          price: [data.price, [Validators.required, Validators.min(10000000)]],
          lai: [data.lai, [Validators.required]],
          bonus: [data.bonus, [Validators.required]]
        });
    });
  }

  editBook(id: number) {
    const book = this.formEdit.value;
    if (this.formEdit.valid) {
      this.bookService.updateBook(id, book).subscribe(
        () => {
          alert('sửa thành công');
          this.router.navigateByUrl('/');
        });
    } else {
      alert('sửa thất bại');
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
