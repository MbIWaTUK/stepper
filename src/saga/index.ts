import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleMiddleware from "redux-saga";
import { rootWatchers } from "./all";
import { fetchWatcher } from "./fetch";
import { sagaReducer } from "./sagaReducer";

const rootReducer = combineReducers({
  saga: sagaReducer,
});

const sagaMiddleware = createSagaMiddleMiddleware();

export const storeSaga = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootWatchers);
