import { SET_SESSION_ID_ACTION, SET_USER_ID_ACTION } from "./actions";
import { SessionActionState, MatchingActionTypes } from "./types";

const initialState: SessionActionState = {
  sessionId: "",
  userId: "",
};
export const MatchMakingReducer = (
  state: SessionActionState = initialState,
  action: MatchingActionTypes
): SessionActionState => {
  switch (action.type) {
    case SET_SESSION_ID_ACTION:
      const sessionId = action.payload.sessionId;
      return {
        ...state,
        sessionId: sessionId,
      };
    case SET_USER_ID_ACTION:
      const userId = action.payload.userId;
      return {
        ...state,
        userId: userId,
      };
    default:
      return state;
  }
};
