import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, Type} from '@angular/core';
import {CustomWebComponentComponent} from './elements/custom-web-component/custom-web-component.component';
import {CustomFormComponent} from './elements/custom-form/custom-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {createCustomElement} from '@angular/elements';
import {StateService} from './services/state.service';
import {MaterialComponentComponent} from './elements/material/material-component/material-component.component';
import {MaterialComponentModule} from './elements/material/material-component.module';

@NgModule({
  declarations: [CustomWebComponentComponent, CustomFormComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [StateService],
  entryComponents: [CustomFormComponent, CustomWebComponentComponent],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    this.loadAsWebComponent(CustomWebComponentComponent, 'custom-web-component');
    this.loadAsWebComponent(CustomFormComponent, 'custom-form-component');
    this.loadAsWebComponent(MaterialComponentComponent, 'material-component');
  }

  // tslint:disable-next-line:ban-types
  private loadAsWebComponent(component: Type<any>, componentName: string) {
    const ngElement = createCustomElement(component, {
      injector: this.injector
    });
    customElements.define(componentName, ngElement);
  }
}
