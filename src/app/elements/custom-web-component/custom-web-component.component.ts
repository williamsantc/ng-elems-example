import {ApplicationRef, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgElementsBase} from '../../utils/ng-elements.base';
import {EmmitComponentLoad} from '../../decorators/component-load.decorator';
import {StateService} from '../../services/state.service';

@Component({
  templateUrl: './custom-web-component.component.html',
  styleUrls: ['./custom-web-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomWebComponentComponent extends NgElementsBase implements OnInit {

  /*
  * Readonly component properties can be passed as normal input.
  * Dynamic inputs and Objects should be handled with state property
  * */
  @Input() public value: string;

  constructor(cd: ChangeDetectorRef, el: ElementRef, stateService: StateService) {
    super(cd, el, stateService);
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
  }

}
