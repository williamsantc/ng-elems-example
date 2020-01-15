import {ApplicationRef, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  templateUrl: './custom-web-component.component.html',
  styleUrls: ['./custom-web-component.component.css']
})
export class CustomWebComponentComponent implements OnInit {

  @Input() public value: string;
  public state: any = {
    message: '',
    counter: ''
  };

  @Input()
  public get setState() {
    return (newState) => {
      this._setStateFromOutside(newState);
      this.app.tick();
    };
  }

  public set setState(value: any) {
    console.error('setState method cannot be override');
  }

  constructor(private app: ApplicationRef) {
  }

  ngOnInit() {
    console.log('component mounted');
  }


  private _setStateFromOutside(newState) {
    if (typeof newState !== 'object') {
      console.error('new state is not an object');
      return;
    }

    if (
      Object.keys(newState).length > 0 &&
      !Object.keys(newState).every(objectKey => Object.keys(this.state).includes(objectKey))
    ) {
      console.error('adding new props to state is not allowed');
      return;
    }
    this.state = {
      ...this.state,
      ...newState,
    };
  }
}
