import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent implements OnInit, AfterViewInit {
  @Input() childMsg = "";
  @Output() msgEvent = new EventEmitter<any>();
  message = "msg from children!";

  constructor() {

    console.log(">> child constructor running!");

  }

  ngOnInit(): void {

    console.log(">> child ngOnInit running!");

  }

  ngAfterViewInit(): void {

    console.log(">> child ngAfterViewInit running!");

  }

  SendMsgToParent(event: any) {
    this.msgEvent.emit({ msgFromChild : "Hello parent,s are you ok?" });
  }

}
