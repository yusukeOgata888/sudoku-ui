import { SET_OWN_ATTRIBUTE_ACTION } from "./actions";
import { BoardActionState, BoardActionTypes } from "./types";

const initialState: BoardActionState = {
  ownAttribute: null,
};
export const BoardReducers = (
  state: BoardActionState = initialState,
  action: BoardActionTypes
): BoardActionState => {
  switch (action.type) {
    case SET_OWN_ATTRIBUTE_ACTION:
      const data = action.payload.ownAttribute;
      return {
        ...state,
        ownAttribute: data,
      };
    default:
      return state;
  }
};
