import { createSelector } from "reselect";

const usersSelector = (state: any) => state;

export const getUserId = createSelector(
  [usersSelector],
  (state) => state.Login.userId
);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.Login.userName
);
