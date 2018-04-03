import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({ selector: '[emitClick]'})
export class EmitClickDirective {
  constructor(el: ElementRef) {}

  @HostListener("click",["$event"])
  onclick(event){
    //history.back();
    console.log('Click Event is Open!',10);
  }

}
