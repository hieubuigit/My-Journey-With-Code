import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-pipes',
  templateUrl: './use-pipes.component.html',
  styleUrls: ['./use-pipes.component.css']
})
export class UsePipesComponent implements OnInit {

  todayDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
