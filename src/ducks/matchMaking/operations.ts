import { Dispatch } from "react";
import { setSessionIdAction } from "./actions";
import { setSessionActionType } from "./types";


export const setSessionId = (sessionId: string) =>
    async (dispatch: Dispatch<setSessionActionType | unknown>): Promise<void> => {
        dispatch(setSessionIdAction(sessionId));
    }
