import { StickyState } from './../state/sticky.state';
import { StickyActions, StickyActionType } from './../actions/sticky.actions';

export function reducer(state: StickyState = [], action: StickyActions): StickyState {
  switch (action.type) {
    case StickyActionType.ADD_STICKY:
      state.push(action.payload);
      return state;
    case StickyActionType.ADD_MANY_STICKIES:
      state.push(...action.payload);
      return state;
    default:
      return state;
  }
}
