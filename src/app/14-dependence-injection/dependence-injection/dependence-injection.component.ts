import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './LogService.service';

@Component({
  selector: 'app-dependence-injection',
  templateUrl: './dependence-injection.component.html',
  styleUrls: ['./dependence-injection.component.css']
})
export class DependenceInjectionComponent implements OnInit {

  constructor(private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) {
  }

  ngOnInit(): void {
    this.logService.viewLog("Hieu Bui say for every one!");
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
  }

}
