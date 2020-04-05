import { createSelector } from '@ngrx/store';
import { Sticky } from '../../models/sticky';
import { AppState } from '../state';

export const stickiesFeature = (state: AppState) => state.stickies;

export const findSticky = createSelector(
  stickiesFeature,
  (stickies: Sticky[], props: { id: string}) => {
    return stickies.find(sticky => sticky.id === props.id);
  }
);
