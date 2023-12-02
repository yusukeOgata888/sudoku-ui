import {
  SET_NUMBER_AT_PUSHED_ACTION,
  SET_OWN_ATTRIBUTE_ACTION,
  SET_NUMBER_FOR_VIEW_ACTION,
} from "./actions";

export type CellAttribute = {
  row: number; // 行
  col: number; // 列
  square: number; // 3X3の四角
};

export type CellInfo = {
  index: number; //
  value: string; //
};

export type SetOwnAttributeActionType = {
  type: typeof SET_OWN_ATTRIBUTE_ACTION;
  payload: {
    ownAttribute: CellAttribute;
  };
};

export type SetNumberAtPushedActionType = {
  type: typeof SET_NUMBER_AT_PUSHED_ACTION;
  payload: {
    number: Number | null;
  };
};

export type SetNumberForViewActionType = {
  type: typeof SET_NUMBER_FOR_VIEW_ACTION;
  payload: {
    numberList: Number[];
  };
};

export interface BoardActionState {
  ownAttribute: CellAttribute | null;
  numberAtPushed: Number | null;
  numberForView: Number[];
}

export type BoardActionTypes =
  | SetOwnAttributeActionType
  | SetNumberAtPushedActionType
  | SetNumberForViewActionType;
