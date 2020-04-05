import { StickyState } from './../state/sticky.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as StickyActions from './../actions/sticky.actions';

const stickyReducer = createReducer(
  [],
  on(StickyActions.add, (state, { sticky }) => {
    const newState = [];
    newState.push(...state);
    newState.push(sticky);
    return newState;
  }),
  on(StickyActions.addMany, (state, { stickies }) => {
    const newState = [];
    newState.push(...state);
    newState.push(...stickies);
    return newState;
  })
);

export function reducer(state: StickyState = [], action: Action): StickyState {
  return stickyReducer(state, action);
}
