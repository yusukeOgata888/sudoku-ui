import { Dispatch } from "react";
import {
  setNumberAtPushedAction,
  setNumberForViewAction,
  setOwnAttributeAction,
} from "./actions";
import { BoardActionTypes, CellAttribute } from "./types";
import { isExportDeclaration } from "typescript";

export const setOwnAttributeData =
  (ownAttribute: CellAttribute) =>
  async (dispatch: Dispatch<BoardActionTypes | unknown>): Promise<void> => {
    await dispatch(setOwnAttributeAction(ownAttribute));
  };

export const setNumberAtPushed =
  (number: Number) =>
  async (dispatch: Dispatch<BoardActionTypes | unknown>): Promise<void> => {
    await dispatch(setNumberAtPushedAction(number));
  };

export const setNumberForView =
  (numberList: Number[]) =>
  async (dispatch: Dispatch<BoardActionTypes | unknown>): Promise<void> => {
    await dispatch(setNumberForViewAction(numberList));
  };
