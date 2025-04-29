import { Dispatch } from "react";
import { setSessionIdAction, setUserIdAction } from "./actions";
import { setSessionActionType,setUserIdActionType } from "./types";

export const setSessionId =
  (sessionId: string) =>
  async (dispatch: Dispatch<setSessionActionType | unknown>): Promise<void> => {
    dispatch(setSessionIdAction(sessionId));
  };
export const setUserId = (userId: string) =>
  async (dispatch: Dispatch<setUserIdActionType | unknown>): Promise<void> => {
    dispatch(setUserIdAction(userId));
  };
