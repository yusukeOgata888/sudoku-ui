import { SET_EMAIL_ACTION } from './actions';


export type SetEmailActionType = {
    type: typeof SET_EMAIL_ACTION;
    payload: {
        email: string;
    };
}

export interface EmailActionState {
    email : string
}

export type EmailActionTypes = SetEmailActionType
