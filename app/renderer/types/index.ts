import { RouterState } from 'connected-react-router';

export interface RouterStates {
  router: RouterState;
}

export interface CounterState {
  count: number;
}

export interface StoreState {
  counter: CounterState;
}
