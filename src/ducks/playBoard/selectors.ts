/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootStateType } from "../RootReducer";

export const fetchOwnAttributeSelector = () =>
  useSelector((state: RootStateType) => state.board.ownAttribute);

export const fetchNumberAtPushedSelector = () =>
  useSelector((state: RootStateType) => state.board.numberAtPushed);

export const fetchNumberForViewSelector = () =>
  useSelector((state: RootStateType) => state.board.numberForView);
