import { Dispatch } from "react";
import { setEmailAction } from "./actions";
import { EmailActionTypes } from "./types";

export const setEmail = (email:string) => 
    async (dispatch: Dispatch<EmailActionTypes | unknown>): Promise<void> => {
        dispatch(setEmailAction(email));
}
