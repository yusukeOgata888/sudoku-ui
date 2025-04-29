import { SET_SESSION_ID_ACTION, SET_USER_ID_ACTION } from "./actions";

export interface SessionResult {
  session_id: string;
  player1: {
    id: string;
    rating: number;
  };
  player2: {
    id: string;
    rating: number;
  };
}

export type setSessionActionType = {
  type: typeof SET_SESSION_ID_ACTION;
  payload: {
    sessionId: string;
  };
};

export type setUserIdActionType = {
  type: typeof SET_USER_ID_ACTION;
  payload: {
    userId: string;
  };
};

export interface SessionActionState {
  sessionId: string;
  userId: string;
}

export type MatchingActionTypes = setSessionActionType | setUserIdActionType;
