import { Sticky } from './../../models/sticky';
import { Action } from '@ngrx/store';

export enum StickyActionType {
  ADD_STICKY = '[Sticky] Add Sticky',
  UPDATE_STICKY = '[Sticky] Update Sticky',
  ADD_MANY_STICKIES = '[Sticky] Add Many Stickies'
}

export class AddStickyAction implements Action {

  readonly type = StickyActionType.ADD_STICKY;

  constructor(public payload: Sticky) { }
}

export class AddManyStickiesAction implements Action {

  readonly type = StickyActionType.ADD_MANY_STICKIES;

  constructor(public payload: Sticky[]) { }
}

export class UpdateStickyAction implements Action {

  readonly type = StickyActionType.UPDATE_STICKY;

  constructor(public payload: Sticky) {}
}

export type StickyActions = AddStickyAction | UpdateStickyAction | AddManyStickiesAction;
