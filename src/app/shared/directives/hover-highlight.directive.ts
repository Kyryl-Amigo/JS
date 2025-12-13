import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transition = 'all 0.25s ease';
    this.el.nativeElement.style.transform = 'translateY(-6px)';
    this.el.nativeElement.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.35)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'translateY(0)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
