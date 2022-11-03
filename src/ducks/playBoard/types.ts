import { SET_OWN_ATTRIBUTE_ACTION } from "./actions";

export type CellAttribute = {
  row: number; // 行
  col: number; // 列
  square: number; // 3X3の四角
};

export type CellInfo = {
  index: number; //
  value: string; //
}

export type SetOwnAttributeActionType = {
  type: typeof SET_OWN_ATTRIBUTE_ACTION;
  payload: {
    ownAttribute: CellAttribute;
  };
};

export interface BoardActionState {
  ownAttribute: CellAttribute | null;
}

export type BoardActionTypes = SetOwnAttributeActionType;
