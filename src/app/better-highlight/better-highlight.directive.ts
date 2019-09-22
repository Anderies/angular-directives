import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // Optional Using HostBinding or Renderer
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.font-size') fontSize: string = '30px';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

    ngOnInit() {
      this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
      console.log("ini native element",this.elRef.nativeElement);
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
      this.backgroundColor = this.highlightColor;
      this.fontSize = '100px';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');  
      this.backgroundColor = this.defaultColor;
      this.fontSize = '30px';
    }
}
