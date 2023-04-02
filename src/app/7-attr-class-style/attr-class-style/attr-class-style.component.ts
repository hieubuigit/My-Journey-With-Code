import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-class-style',
  templateUrl: './attr-class-style.component.html',
  styleUrls: ['./attr-class-style.component.css']
})
export class AttrClassStyleComponent implements OnInit {

  enableCls = true;
  style1 = 'width: 50px; heigh: 50px; background-color: yellow;'

  constructor() { }

  ngOnInit(): void {
  }

}
