import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { githubReducer } from "./githubReducer";
import { mainReducer } from "./mainRedicer";

const rootReducer = combineReducers({
  main: mainReducer,
  github: githubReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
