import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/Student';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentFormCreate: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _studentService: StudentService, private _router: Router) {
  }

  ngOnInit(): void {
    this.studentFormCreate = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        gender: new FormControl(),
        point: new FormControl('', [this.validateCustomer])
      });
  }

  private validateCustomer(control: AbstractControl) {
    const point = control.value;
    if (point < 0) {
      return {invalid0: true};
    }
    return null;
  }
  // createStudent(studentForm: NgForm) {
  //   if (studentForm.valid) {
  //     console.log(studentForm);
  //     this.onCreate.emit(studentForm.value);
  //   }
  // }

  createStudentWithReactive() {
    if (this.studentFormCreate.valid) {
      this._studentService.save(this.studentFormCreate.value);
      this._router.navigateByUrl('/home');
    }
  }
}
