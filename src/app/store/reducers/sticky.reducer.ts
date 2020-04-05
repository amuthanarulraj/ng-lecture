import { StickyState } from './../state/sticky.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as StickyActions from './../actions/sticky.actions';

const stickyReducer = createReducer(
  [],
  on(StickyActions.add, (state, { sticky }) => { state.push(sticky); return state; }),
  on(StickyActions.addMany, (state, { stickies }) => { state.push(...stickies); return state; })
);

export function reducer(state: StickyState = [], action: Action): StickyState {
  return stickyReducer(state, action);
}
