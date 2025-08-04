import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../const/validators';
import { CustomValidators } from '../../validators/customValidators';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {
  personalDetailsForm !: FormGroup;
  documentUploadForm !: FormGroup;

  constructor(private fb : FormBuilder) { 
    this.personalDetailsForm = this.fb.group({
      name : [null, [Validators.required, Validators.pattern(CustomRegex.name)]],
      email : [null, [Validators.required, Validators.pattern(CustomRegex.email)]],
      phone : [null, [Validators.required, CustomValidators.phoneNumValidator]],
      dob : [null, [Validators.required, CustomValidators.DateOfBirthValidator()]],
      gender : [null, [Validators.required]],
      marritalStatus : [null, [Validators.required]],
    })


    this.documentUploadForm = this.fb.group({
      adhar : [null, [Validators.required, Validators.pattern(CustomRegex.onlyNums)]],
      pan : [null, [Validators.required]]
    })
  }

  onSubmitForm(){
    console.log(this.personalDetailsForm.value);
    
  }

  ngOnInit(): void {
 
  }

}
