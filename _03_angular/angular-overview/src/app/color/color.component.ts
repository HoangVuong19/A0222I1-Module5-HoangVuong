import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorNew: string = "black";

  constructor() { }

  ngOnInit(): void {
  }

  color(color: string) {
    switch (color) {
      case "primary":
        this.colorNew = "blue";
        break;
      case "success":
        this.colorNew = "green";
        break;
      case "danger":
        this.colorNew = "red";
        break;
    }
  }
}
