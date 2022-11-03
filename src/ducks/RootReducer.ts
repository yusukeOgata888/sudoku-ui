import { Action, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { EmailReducer } from "./email/reducers";
import { BoardReducers } from "./playBoard/reducers";

export const RootReducer = combineReducers({
  board: BoardReducers,
  email: EmailReducer,
});

export default RootReducer;
export type RootStateType = ReturnType<typeof RootReducer>;
export type AppThunkDispatch = ThunkDispatch<
  RootStateType,
  unknown,
  Action<string>
>;
