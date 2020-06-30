import { takeLatest, select } from "redux-saga/effects";
import { AppTypes } from "../AppRedux/actions";
import { NavigationUtils } from "../../navigation";
export function* startup() {
  try {
    const { token } = yield select((state) => state.login);
    if (token) {
      NavigationUtils.startMainContent();
    } else {
      NavigationUtils.startIntroContent();
    }
  } catch (error) {}
}

const appSagas = () => [takeLatest(AppTypes.STARTUP, startup)];

export default appSagas();
