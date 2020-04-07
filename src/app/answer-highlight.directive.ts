import { Directive, ElementRef } from "@angular/core";
import { NgControl } from "@angular/forms";
import { map, filter } from "rxjs/operators";

@Directive({
  selector: "[appAnswerHighlight]",
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {
    //el.nativeElement.controls.
  }
  ngOnInit() {
    // console.log(this.controlName.control.parent);
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ a, b, answer }) => {
          return Math.abs((a + b - answer) / (a + b));
        })
      )
      .subscribe((value) => {
        if (value < 0.2) {
          this.el.nativeElement.classList.add("close");
        } else {
          this.el.nativeElement.classList.remove("close");
        }
      });
  }
}

//statusChanges gives valid or invalid everytime
//valuechanges give all value changes
//FormControlName is the binding glue class that binds a form control object to the template with a form control name
//controlname.control gives the actual form control
//controlname.control.parent gives the formgroup
