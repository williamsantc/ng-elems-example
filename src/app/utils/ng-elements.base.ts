import {ChangeDetectorRef, ElementRef, Input} from '@angular/core';
import {StateService} from '../services/state.service';
/*
* Base component to handle web component communication
* */
export class NgElementsBase {


  public state: any = {};

  @Input()
  public get setState() {
    return (newState) => {
      this.state = this.stateService.setStateFromOutside(newState, this.state);
      this.cd.detectChanges();
    };
  }

  public set setState(value: any) {
    console.error('setState method cannot be override');
  }

  @Input()
  public get getState() {
    return (property) => {
      return this.stateService.getStateFromOutSide(property, this.state);
    };
  }

  public set getState(value: any) {
    console.error('getState method cannot be override');
  }

  constructor(protected cd: ChangeDetectorRef,
              protected el: ElementRef,
              protected stateService: StateService) {

  }

  protected emmitComponentLoad() {
    const domEvent = new CustomEvent('loaded', {detail: true});
    this.el.nativeElement.dispatchEvent(domEvent);
  }

  protected emitEvent(eventName: string, val: any) {
    const domEvent = new CustomEvent(eventName, {detail: val});
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
