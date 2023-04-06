import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  active = false;
  guestNm = "";

  items = [
    {name: "John"},
    {name: "Jenny"},
    {name: "Gump"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
