import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { BoardReducers } from "../playBoard/reducers";

export default function createStore(history: any) {
  return reduxCreateStore(
    // reduxのクリエイトメソッドの別名
    combineReducers({
      router: connectRouter(history),
      board: BoardReducers,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
