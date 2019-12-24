import {NavigationAction, NavigationContainerComponent} from 'react-navigation';
import {Maybe} from '../types';

let navigator: Maybe<NavigationContainerComponent>;
let queue: NavigationAction[] = [];

export function dispatch(action: NavigationAction) {
  queue.push(action);
  doDispatch();
}

export function setNavigator(ref: NavigationContainerComponent) {
  navigator = ref;
  doDispatch();
}

function doDispatch() {
  if (!navigator) {
    return;
  }

  for (const action of queue) {
    navigator.dispatch(action);
  }

  queue = [];
}
