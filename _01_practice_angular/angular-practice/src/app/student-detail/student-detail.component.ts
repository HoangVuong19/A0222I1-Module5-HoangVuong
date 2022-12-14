import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/Student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentDetail: Student | undefined;
  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _studentService: StudentService) { }

  ngOnInit(): void {
    const studentIndex = this._activatedRoute.snapshot.params.index;
    this.studentDetail = this._studentService.findByIndex(studentIndex - 1);
  }

}
