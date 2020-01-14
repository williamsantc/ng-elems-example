import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  public form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    const formControls = {
      name: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    };
    this.form = new FormGroup(formControls);
  }

  public validateForm() {
    if (this.form.valid) {
      alert('validated!');
      console.log(this.form.value);
    } else {
      alert('validation failed');
    }
  }

}
