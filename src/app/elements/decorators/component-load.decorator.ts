import {BaseStateComponent} from '../base-state.component';

export function EmmitComponentLoad(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  if (propertyKey !== 'ngOnInit') {
    throw new Error('EmmitComponentLoad Decorator can only be applied on ngOnInit method');
  }
  const originalMethod = descriptor.value;
  // tslint:disable-next-line:only-arrow-functions
  descriptor.value = function(...args: any[]) {
    if (!(this instanceof BaseStateComponent)) {
      throw new Error('EmmitComponentLoad Decorator can only be applied with BaseStateComponent inheritance');
    }
    originalMethod.apply(this, args);
    this.emmitComponentLoad();
  };
}
