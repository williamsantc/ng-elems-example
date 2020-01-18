import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgElementsBase} from '../../utils/ng-elements.base';
import {EmmitComponentLoad} from '../../decorators/component-load.decorator';

@Component({
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFormComponent extends NgElementsBase implements OnInit {

  public form: FormGroup;

  @EmmitComponentLoad
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
      this.emitEvent('form-filled', this.form.value);
    } else {
      alert('validation faied');
    }
  }

}
