export const SET_SESSION_ID_ACTION = "SET_SESSION_ID_ACTION";
export const SET_USER_ID_ACTION = "SET_USER_ID_ACTION";

export const setSessionIdAction = (sessionId: string) => {
    return {
        type: SET_SESSION_ID_ACTION,
        payload: { sessionId },
    };
}

export const setUserIdAction = (userId: string) => {
  return {
    type: SET_USER_ID_ACTION,
    payload: { userId },
  };
};