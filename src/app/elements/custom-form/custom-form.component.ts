import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private el: ElementRef) {
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

  private customEmit(val) {
    const domEvent = new CustomEvent('form-filled', {detail: val});
    this.el.nativeElement.dispatchEvent(domEvent);
  }

  public validateForm() {
    if (this.form.valid) {
      alert('validated!');
      this.customEmit(this.form.value);
    } else {
      alert('validation faied');
    }
  }

}
