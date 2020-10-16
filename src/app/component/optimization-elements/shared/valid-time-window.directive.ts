import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { ValidTimeWindow } from './valid-timewindow.validator';

@Directive({
    selector: '[validTimeWindow]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidTimeWindowDirective, multi: true }]
})
export class ValidTimeWindowDirective implements Validator {
    @Input() validTimeWindow: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return ValidTimeWindow(this.validTimeWindow[0])(formGroup);
    }
}