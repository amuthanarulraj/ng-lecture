import { AppState } from './../state/index';
import { ActionReducerMap } from '@ngrx/store';
import { reducer as stickyReducer } from './sticky.reducer';

export const reducers: ActionReducerMap<AppState> = {
  stickies: stickyReducer
};
