import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function lastSpaceValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value: string = control.value;

        if (!value) {
            return null;
        }

        const destructValue = value.split('');

        if(destructValue[destructValue.length - 1] === ' ') {
            return {spaceValidationError: true};
        }

        return null;
    }
}