import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  time = 10;
  myInterval;
  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.myInterval = setInterval(() => {
      this.time--;
      if(this.time == 0){
        this.finish()
        alert("Happy new year!!")
      }
    }, 1000)

  }

  reset() {
    this.time = 10;
  }

  finish() {
    clearInterval(this.myInterval)
  }
}
