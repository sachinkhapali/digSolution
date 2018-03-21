import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }
  contactUsForm : FormGroup;
  submitted = false;
  ngOnInit() { 
    this.contactUsForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      userPhone: new FormControl('',[Validators.required]),
      message: new FormControl('')
    });
   }

  isFieldValid(field: string) {
    if(this.contactUsForm.get(field) != null )
    {
      return !this.contactUsForm.get(field).valid && this.contactUsForm.get(field).touched;
    }
    
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field)
    };
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactUsForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.contactUsForm); //{7}
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}


}
