/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootStateType } from "../RootReducer";

export const fetchOwnAttributeSelector = () =>
  useSelector((state: RootStateType) => state.board.ownAttribute);
