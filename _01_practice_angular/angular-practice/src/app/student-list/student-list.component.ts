import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/Student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] | undefined;
  ngOnInit(): void {
    this.students = this._studentService.students;
  }
  // tslint:disable-next-line:variable-name
  constructor(private _studentService: StudentService) {
  }
  createStudent(value: Student) {
    this._studentService.save(value);
  }
}
