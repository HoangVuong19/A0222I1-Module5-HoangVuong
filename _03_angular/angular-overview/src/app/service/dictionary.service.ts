import { Injectable } from '@angular/core';
import {IWord} from "../../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _dictionaries: IWord[] = [
    {word: 'paint', mean: 'sơn'},
    {word: 'main', mean: 'chính'},
    {word: 'primary', mean: 'chủ yếu'},
    {word: 'contain', mean: 'chứa'}
  ];
  constructor() { }

  findAll() {
    return this._dictionaries;
  }

  findByIndex(index: number) {
    return this._dictionaries[index];
  }
}
