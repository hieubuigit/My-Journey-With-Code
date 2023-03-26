import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  ngAfterViewInit(): void {
    console.log("=> ngAfterViewInit running");
  }

  ngOnDestroy(): void {
    console.log("=> ngOnDestroy running");

  }

  ngOnInit(): void {
    console.log("=> ngOnInit running");
  }

  title = 'learn-angular';


  Add(a : number, b: number) {
    return a + b;
  }


}
