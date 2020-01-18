import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgElementsBase} from '../../utils/ng-elements.base';
import {EmmitComponentLoad} from '../../decorators/component-load.decorator';

@Component({
  templateUrl: './custom-web-component.component.html',
  styleUrls: ['./custom-web-component.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CustomWebComponentComponent extends NgElementsBase implements OnInit {

  /*
  * Input properties can be passed as plain input.
  * Dynamic and complex inputs like Objects should be handled with state property
  * */
  @Input() public value: string;

  @EmmitComponentLoad
  ngOnInit() {
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

}
