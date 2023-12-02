import { BoardActionTypes, CellAttribute } from "./types";

export const SET_OWN_ATTRIBUTE_ACTION = "SET_OWN_ATTRIBUTE_ACTION";
export const SET_NUMBER_AT_PUSHED_ACTION = "SET_NUMBER_AT_PUSHED";
export const SET_NUMBER_FOR_VIEW_ACTION = "SET_NUMBER_FOR_VIEW_ACTION";

export const setOwnAttributeAction = (
  ownAttribute: CellAttribute
): BoardActionTypes => {
  return {
    type: SET_OWN_ATTRIBUTE_ACTION,
    payload: {
      ownAttribute,
    },
  };
};

export const setNumberAtPushedAction = (number: Number): BoardActionTypes => {
  return {
    type: SET_NUMBER_AT_PUSHED_ACTION,
    payload: {
      number,
    },
  };
};

export const setNumberForViewAction = (
  numberList: Number[]
): BoardActionTypes => {
  return {
    type: SET_NUMBER_FOR_VIEW_ACTION,
    payload: {
      numberList,
    },
  };
};
