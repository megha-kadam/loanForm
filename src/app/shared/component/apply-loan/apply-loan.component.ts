import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name : [null, [Validators.required]],
      email : [null, [Validators.required]],
      phone : [null, [Validators.required]],
      dob : [null, [Validators.required]],
      gender : [null, [Validators.required]],
      marritalStatus : [null, [Validators.required]],
    })


    this.documentUploadForm = this.fb.group({
      adhar : [null, [Validators.required]],
      pan : [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    console.log(this.personalDetailsForm.value);
    console.log(this.documentUploadForm.value);
    
    
  }

}
