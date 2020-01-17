import {Injectable} from '@angular/core';

@Injectable()
export class StateService {

  public setStateFromOutside(newState, oldState) {
    if (typeof newState !== 'object') {
      console.error('new state is not an object');
      return oldState;
    }

    if (
      Object.keys(newState).length > 0 &&
      !Object.keys(newState).every(objectKey => Object.keys(oldState).includes(objectKey))
    ) {
      console.error('adding new props to state is not allowed');
      return oldState;
    }
    return {
      ...oldState,
      ...newState,
    };
  }

  public getStateFromOutSide(property: string, state: any) {
    if (!Object.keys(state).includes(property)) {
      console.error(`Property ${property} not in state`);
    }
    return state[property];
  }
}
