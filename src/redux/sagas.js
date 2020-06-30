import { all } from "redux-saga/effects";
import authSagas from "./AuthRedux/sagas";
import appSagas from "./AppRedux/sagas";

export default function* root() {
  yield all([...authSagas, ...appSagas]);
}
