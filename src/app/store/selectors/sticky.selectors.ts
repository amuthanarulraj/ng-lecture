import { createSelector } from '@ngrx/store';
import { Sticky } from '../../models/sticky';

export const findSticky = createSelector(
    (stickies: Sticky[], props: { id: number}) => {
        return stickies.find(sticky => sticky.id === props.id);
    }
)