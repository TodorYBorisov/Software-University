import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {

    const domainStrings = domains.join('|')

    const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`)

    return (control) => {
        const x = control.value;
        const z = regExp.test(control.value);
        return control.value === '' || regExp.test(control.value)
            ? null
            : { emailValidator: true };
    }
}