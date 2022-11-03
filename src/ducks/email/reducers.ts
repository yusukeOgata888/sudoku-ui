import { SET_EMAIL_ACTION } from "./actions";
import { EmailActionState, EmailActionTypes } from "./types";

const initialState: EmailActionState = {
    email: '',
};
export const EmailReducer = (
    state: EmailActionState = initialState,
    action: EmailActionTypes
): EmailActionState => {
    switch (action.type) {
        case SET_EMAIL_ACTION:
            const data = action.payload.email
        return {
            ...state,
            email: data,
        };
    default:
        return state;
    }
}