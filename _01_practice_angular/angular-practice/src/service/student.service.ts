import { Injectable } from '@angular/core';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // tslint:disable-next-line:variable-name
  private _students: Student[] = [
    {name: 'nguyen A', gender: 0, point: 10},
    {name: 'nguyen B', gender: 0, point: 9},
    {name: 'nguyen C', gender: 2, point: 8},
    {name: 'nguyen D', gender: 1, point: 10}
  ];
  constructor() { }
  get students(): Student[] {
    return this._students;
  }
  set students(value: Student[]) {
    this._students = value;
  }

  save(student: Student) {
    this._students.unshift(student);
  }
  findByIndex(index: number) {
    return this._students[index];
  }
}
