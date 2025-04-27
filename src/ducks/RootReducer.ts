import { Action, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { EmailReducer } from "./email/reducers";
import { BoardReducers } from "./playBoard/reducers";
import { MatchMakingReducer } from "./matchMaking/reducers";


export const RootReducer = combineReducers({
  board: BoardReducers,
  email: EmailReducer,
  session: MatchMakingReducer,
});

export default RootReducer;
export type RootStateType = ReturnType<typeof RootReducer>;
export type AppThunkDispatch = ThunkDispatch<
  RootStateType,
  unknown,
  Action<string>
>;
