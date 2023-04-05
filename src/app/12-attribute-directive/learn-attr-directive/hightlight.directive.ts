import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appHightLight]'
})

export class HightLightDirective {

  @Input() appHightLight: string = "";

  @HostListener("mouseenter") onMouseEnter() {
    this.hightlight(this.appHightLight);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.hightlight('');
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.appHightLight;
  }

  hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
