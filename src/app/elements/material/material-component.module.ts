import {NgModule} from '@angular/core';
import {MaterialComponentComponent} from './material-component/material-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule, MatTableModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';

/*
* For best practices reasons, this component has its own module
* (All Angular material modules should be imported here).
*
* Popups-like Components (modals, dialogs, date-picker or non-native select)
* won't render correctly due to shadow DOM style encapsulation
* (you can try CDK Portals, i'm not sure if it really works: https://material.angular.io/cdk/portal/overview)
* if you want to use that components, you have to disable shadow DOM and inject styles in the hole page
* (mixin app styles with external styles is a bad design practice when the company has its own corporate image styles,
* it can break the current app design and break your component design)
*
* The goal of a Web Component is to solve a simple problem with a simple implementation.
*
* If you need to solve a complex problem and want to use the advantages
* of Angular CDK or Angular Material and coexist with other
* front-end frameworks you should consider using a micro-frontends architecture.
* see: https://martinfowler.com/articles/micro-frontends.html
* */
@NgModule({
  declarations: [MaterialComponentComponent],
  entryComponents: [MaterialComponentComponent],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class MaterialComponentModule {
}
