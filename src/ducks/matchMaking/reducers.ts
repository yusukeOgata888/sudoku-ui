import { SET_SESSION_ID_ACTION } from "./actions";
import { SessionActionState, setSessionActionType } from "./types";

const initialState: SessionActionState = {
    sessionId: "",
};
export const MatchMakingReducer = (
    state: SessionActionState = initialState,
    action: setSessionActionType
): SessionActionState => {
    switch (action.type) {
        case SET_SESSION_ID_ACTION:
            const sessionId = action.payload.sessionId
        return {
            ...state,
            sessionId: sessionId,
        };
    default:
        return state;
    }
}