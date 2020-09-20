import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultOpacity: number = 0.5;
  @Input() highlightOpacity: number = 1;
  @HostBinding('style.opacity') opacity: number = this.defaultOpacity;

  constructor() { }

  ngOnInit() {
    this.opacity = this.defaultOpacity;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.opacity = this.highlightOpacity;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.opacity = this.defaultOpacity;
  }

}
