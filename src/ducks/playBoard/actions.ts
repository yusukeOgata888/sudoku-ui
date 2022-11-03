import { BoardActionTypes, CellAttribute } from "./types";

export const SET_OWN_ATTRIBUTE_ACTION = "SET_OWN_ATTRIBUTE_ACTION";

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
