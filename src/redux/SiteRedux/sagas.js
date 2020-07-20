import { put, call, takeLatest } from "redux-saga/effects";
import SiteActions, { SiteTypes } from "./actions";
import { getAllSiteApi } from "../../api/site";

export function* getAllSiteSaga({ data }) {
  try {
    const response = yield call(getAllSiteApi);
    console.log(response);

    yield put(SiteActions.getAllSiteSuccess(response));
  } catch (error) {
    yield put(SiteActions.getAllSiteFailure(error));
    // if (error.code === 403 || error.code === 409) {
    //   return showInAppNotification("Sign In", error.message, "error");
    // }
    // return showInAppNotification("Sign In", "Check your connection", "error");
  }
}

const siteSagas = () => [takeLatest(SiteTypes.GET_ALL_SITE, getAllSiteSaga)];

export default siteSagas();
