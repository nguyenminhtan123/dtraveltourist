import { put, call, takeLatest } from "redux-saga/effects";
import SiteActions, { SiteTypes } from "./actions";
import { getAllSiteApi, getSiteByIdApi } from "../../api/site";

export function* getAllSiteSaga() {
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

export function* getSiteByIdSaga({ id }) {
  try {
    const response = yield call(getSiteByIdApi, id);
    console.log(response);

    yield put(SiteActions.getSiteByIdSuccess(response));
  } catch (error) {
    yield put(SiteActions.getSiteByIdFailure(error));
    // if (error.code === 403 || error.code === 409) {
    //   return showInAppNotification("Sign In", error.message, "error");
    // }
    // return showInAppNotification("Sign In", "Check your connection", "error");
  }
}

const siteSagas = () => [
  takeLatest(SiteTypes.GET_ALL_SITE, getAllSiteSaga),
  takeLatest(SiteTypes.GET_SITE_BY_ID, getSiteByIdSaga),
];

export default siteSagas();
