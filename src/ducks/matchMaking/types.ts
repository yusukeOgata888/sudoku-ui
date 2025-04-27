import { SET_SESSION_ID_ACTION } from "./actions";

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
    sessionId: string
  };
}

export interface SessionActionState {
  sessionId: string;
}