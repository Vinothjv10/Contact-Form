import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  contactForm: any = FormGroup;

  isSubmit = false;
  sumbitMessage = '';

  // submitted = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(15)]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      message: [null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300)
      ]],
    });
  }
  get firstName() {
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  submitData(e: any) {
    // this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    console.log(e);
    this.isSubmit = true;

    this.sumbitMessage = " Sumbitted Successfully";
    setTimeout(() => {
      this.isSubmit = false;
    }, 2000);

    this.contactForm.reset();
  }

}
