import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function ValidTimeWindow(controlName: string) {
  return (formGroup: FormGroup) => {
    const presentKeys = Object.keys(formGroup.controls);

    // Try to find twstart and twend
    const starts = presentKeys.filter((key) => key.includes('twstart'));
    const ends = presentKeys.filter((key) => key.includes('twend'));

    if (starts === undefined || ends === undefined) {
      return null;
    }

    if (starts.length !== ends.length) {
      return null;
    }

    let lastEndMillis;
    let lastEndControl;

    // Sort items
    for (let i = 0; i < starts.length; i++) {
      //console.log(lastEndMillis);

      const curStartControl = formGroup.controls[starts[i]];
      const curEndControl = formGroup.controls[ends[i]];

      const curStart = curStartControl.value;
      const curEnd = curEndControl.value;

      // Is Start before end?
      const curStartMillis = new Date(curStart).getTime();
      const curEndMillis = new Date(curEnd).getTime();

      if (curStartMillis > 0 && curEndMillis > 0) {
        if (curEndMillis <= curStartMillis) {
          // Error

          curEndControl.setErrors({ endBeforeStart: true });
        }
      }

      if (lastEndMillis !== undefined) {
        if (curStartMillis < lastEndMillis) {
          //console.log('Hours overlapping');
          curStartControl.setErrors({ overlapping: true });
          curEndControl.setErrors({ overlapping: true });
          lastEndControl.setErrors({ overlapping: true });
        }
      }

      lastEndMillis = curEndMillis;
      lastEndControl = curEndControl;
    }
  };
}
