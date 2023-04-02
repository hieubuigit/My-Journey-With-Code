import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resize-component',
  templateUrl: './resize-component.component.html',
  styleUrls: ['./resize-component.component.css']
})
export class ResizeComponentComponent implements OnInit {

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {

  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(num : number) {
    this.size = Math.min(40, Math.max(8, +this.size + num));
    this.sizeChange.emit(this.size);
  }

}
