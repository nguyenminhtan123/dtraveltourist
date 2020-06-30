import { put, call, takeLatest } from "redux-saga/effects";
import { adminLoginApi, registerApi } from "../../api/auth";
import AuthActions, { AuthTypes } from "./actions";

import AppActions from "../AppRedux/actions";
export function* logoutSaga() {
  try {
    yield put(AppActions.startup());
    global.token = null;
  } catch (error) {}
}

export function* adminLoginSaga({ data }) {
  try {
    const response = yield call(adminLoginApi, data);
    yield put(AuthActions.loginSuccess(response));
    global.token = response.token;
    global.data = {};
    yield put(AppActions.startup());
  } catch (error) {
    yield put(AuthActions.loginFailure(error));
    // if (error.code === 403 || error.code === 409) {
    //   return showInAppNotification("Sign In", error.message, "error");
    // }
    // return showInAppNotification("Sign In", "Check your connection", "error");
  }
}

export function* registerSaga({ data }) {
  try {
    const response = yield call(registerApi, data);
    global.token = response.token;
    yield put(AuthActions.registerSuccess(response));
    yield put(AppActions.startup());
  } catch (error) {
    yield put(AuthActions.registerFail(error));
  }
}

const authSagas = () => [
  takeLatest(AuthTypes.LOGIN, adminLoginSaga),
  takeLatest(AuthTypes.LOGOUT, logoutSaga),
  takeLatest(AuthTypes.REGISTER, registerSaga),
];

export default authSagas();
