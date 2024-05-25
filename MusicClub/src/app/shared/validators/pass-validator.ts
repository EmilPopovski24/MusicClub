import { FormGroup, ValidatorFn } from "@angular/forms";


export function matchPassValidator(password1: string, password2:string): ValidatorFn {
    return(control) => {
        const group = control as FormGroup;
        const pass1 = group.get(password1)
        const pass2 = group.get(password2)

        return pass1?.value === pass2?.value ? null : { matchPassValidator: true}
    }
}