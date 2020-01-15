import {ApplicationRef, Component, ElementRef, Input, OnInit} from '@angular/core';
import {BaseStateComponent} from '../base-state.component';
import {EmmitComponentLoad} from '../decorators/component-load.decorator';

@Component({
  templateUrl: './custom-web-component.component.html',
  styleUrls: ['./custom-web-component.component.css']
})
export class CustomWebComponentComponent extends BaseStateComponent implements OnInit {

  @Input() public value: string;

  constructor(app: ApplicationRef, el: ElementRef) {
    super(app, el);
    this.state = {
      message: '',
      entryData: {
        url: '',
        method: '',
        body: {},
        headers: {},
      }
    };
  }

  @EmmitComponentLoad
  ngOnInit() {
    console.log('component mounted');
  }


}
