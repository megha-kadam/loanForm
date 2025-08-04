import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";


export class CustomValidators{
    static phoneNumValidator(control : AbstractControl) : ValidationErrors | null{
        let val = control.value;

        let regex = /^[6-9]\d{9}$/;

        let isInvalid = regex.test(val);

        if(!val){
            return null
        }

        if(isInvalid){
            return null
        }else{
            return {
                InvalidPhoneNum : `Phone includes only 10 digit and start with 6-9`
            }
            
        }
    }


    static DateOfBirthValidator() : ValidatorFn{
        return (control : AbstractControl) : ValidationErrors | null => {
            const val = control.value;

            let dob = moment(val, "DD-MM-YYYY");
            let today = moment()
            let diff = today.diff(dob, "years");

            if(diff >= 21){
                return null
            }else{
                return {
                    invalidDOBValidator : `You must be at least 21 year old.`
                }
            }
        }
    }
}