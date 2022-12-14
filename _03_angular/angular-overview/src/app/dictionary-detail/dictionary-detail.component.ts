import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryDetail: IWord | undefined;

  constructor(private _activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    const dictionaryIndex = this._activatedRoute.snapshot.params.index;
    this.dictionaryDetail = this.dictionaryService.findByIndex(dictionaryIndex - 1);
  }

}
