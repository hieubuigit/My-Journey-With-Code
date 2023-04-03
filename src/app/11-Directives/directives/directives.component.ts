import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  setNgClassObj = {};
  currentStyle = {};
  yourEmail : any = "abc@gmail.com";

  constructor() { }

  ngOnInit(): void {
    this.setClass();
    this.setCurrentStyle();
  }

  setClass() {
    this.setNgClassObj = {
      classOne: true,
      classTwo: true,
      classThree: true
    };
  }

  setCurrentStyle() {
    this.currentStyle = {
      'color': "red",
      'font-size': "2.3em",
    }
  }

}
