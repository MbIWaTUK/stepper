import { all } from "redux-saga/effects";
import { fetchWatcher } from "./fetch";

export function* rootWatchers() {
  yield all([fetchWatcher()]);
}
