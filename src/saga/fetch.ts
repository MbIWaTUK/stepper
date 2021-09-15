import {
  put,
  takeEvery,
  call,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { FETCHLIST, setSagaList } from "./sagaReducer";

const fetchUsers = () =>
  fetch("https://api.github.com/search/repositories?q=stars");

function* fetchWorker(): Generator<CallEffect | PutEffect> {
  const result: any = yield call(fetchUsers);
  const json = yield call(() => new Promise((res: any) => res(result.json())));
  yield put(setSagaList(json));
}

export function* fetchWatcher() {
  yield takeEvery(FETCHLIST, fetchWorker);
}
