import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.css']
})
export class TemplateStatementComponent implements OnInit {

  result = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(evt: any) {
    this.result = !this.result;
    console.log("click Me => ", evt);
  }

}
