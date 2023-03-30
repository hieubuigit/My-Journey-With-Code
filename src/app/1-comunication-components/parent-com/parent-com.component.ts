import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComComponent } from '../child-com/child-com.component';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrls: ['./parent-com.component.css']
})
export class ParentComComponent implements OnInit, AfterViewInit  {
  msgChild: string = "";
  @ViewChild(ChildComComponent) child: any;

  constructor() {

    console.log(">> parent constructor running!");

  }

  ngAfterViewInit(): void {
    console.log(">> parent ngAfterViewInit running!");
    // alert(this.child.message);
  }

  ngOnInit(): void {
    console.log(">> parent ngOnInit running!");
  }

  GetMsgFromChild(evt: any) {
    this.msgChild = evt.msgFromChild;
  }

}
