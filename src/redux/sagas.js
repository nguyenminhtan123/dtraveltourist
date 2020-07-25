import { all } from "redux-saga/effects";
import authSagas from "./AuthRedux/sagas";
import appSagas from "./AppRedux/sagas";
import siteSagas from "./SiteRedux/sagas";
import tourSagas from "./BookTourRedux/sagas";

export default function* root() {
  yield all([...authSagas, ...appSagas, ...siteSagas, ...tourSagas]);
}
