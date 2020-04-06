import { AbstractControl } from "@angular/forms";

export class MathValidators {
  //static methods cannot access instance variable
  static addition(form: AbstractControl) {
    //return null - form is valid
    //return {} - if form is invalid and has errors
    const { a, b, answer } = form.value;
    if (a + b === parseInt(answer)) {
      return null;
    }
    return { addition: true };
  }
}
