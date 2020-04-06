import { AbstractControl } from "@angular/forms";

export class MathValidators {
  //static methods cannot access instance variable
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];

      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };

    //return null - form is valid
    //return {} - if form is invalid and has errors
  }
}
