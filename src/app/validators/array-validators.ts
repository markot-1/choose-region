import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minArrayLength(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value && control.value.length >= min
      ? null
      : { minArrayLength: { requiredLength: min, actualLength: control.value.length } };
  };
}