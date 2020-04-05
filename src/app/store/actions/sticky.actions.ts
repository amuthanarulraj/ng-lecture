import { Sticky } from './../../models/sticky';
import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Sticky] Add Sticky',
  props<{ sticky: Sticky}>()
);

export const addMany = createAction(
  '[Sticky] Update Sticky',
  props<{ stickies: Sticky[]}>()
);

export const update = createAction(
  '[Sticky] Add Many Stickies',
  props<{ sticky: Sticky}>()
);
