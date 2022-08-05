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

  submitted = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lname: [null, Validators.required],
      // email: [null, [Validators.required, Validators.email]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      message: [null, Validators.required],
    });
  }
  get f() { return this.contactForm.controls; }

  submitData(e: any) {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    console.log(e)
    this.isSubmit = true;

    this.sumbitMessage = " Sumbitted Successfully";
    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);
  }

}
