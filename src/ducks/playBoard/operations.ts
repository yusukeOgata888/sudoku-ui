import { Dispatch } from "react";
import { setOwnAttributeAction } from "./actions";
import { BoardActionTypes, CellAttribute } from "./types";

export const setOwnAttributeData =
  (ownAttribute: CellAttribute) =>
  async (dispatch: Dispatch<BoardActionTypes | unknown>): Promise<void> => {
     dispatch(setOwnAttributeAction(ownAttribute));
  };
