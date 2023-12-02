import {
  SET_NUMBER_AT_PUSHED_ACTION,
  SET_OWN_ATTRIBUTE_ACTION,
  SET_NUMBER_FOR_VIEW_ACTION,
} from "./actions";
import { BoardActionState, BoardActionTypes } from "./types";

const initialState: BoardActionState = {
  ownAttribute: null,
  numberAtPushed: null,
  numberForView: [],
};
export const BoardReducers = (
  state: BoardActionState = initialState,
  action: BoardActionTypes
): BoardActionState => {
  switch (action.type) {
    case SET_OWN_ATTRIBUTE_ACTION:
      const ownAttribute = action.payload.ownAttribute;
      return {
        ...state,
        ownAttribute: ownAttribute,
      };

    case SET_NUMBER_AT_PUSHED_ACTION:
      const numberAtPushed = action.payload.number;
      return {
        ...state,
        numberAtPushed: numberAtPushed,
      };

    case SET_NUMBER_FOR_VIEW_ACTION:
      const numberForView = action.payload.numberList;
      return {
        ...state,
        numberForView: numberForView,
      };

    default:
      return state;
  }
};
