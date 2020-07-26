import { put, call, takeLatest } from "redux-saga/effects";
import TourActions, { UpdateTourTypes } from "./actions";
import { updateTourApi, addSiteToTourApi } from "../../api/tour";
import { Alert } from "react-native";

export function* updateTourSaga({ data }) {
  try {
    const response = yield call(updateTourApi, data);
    console.log(response);

    yield put(TourActions.updateTourSuccess(response));
  } catch (error) {
    yield put(TourActions.updateTourFail(error));
    // if (error.code === 403 || error.code === 409) {
    //   return showInAppNotification("Sign In", error.message, "error");
    // }
    // return showInAppNotification("Sign In", "Check your connection", "error");
  }
}

export function* addSiteToTourSaga({ data }) {
  try {
    const response = yield call(addSiteToTourApi, data);
    console.log(response);
  } catch (error) {
    console.log(error);

    if (error.code === 404) {
      // return showInAppNotification("Sign In", error.message, "error");
      // Alert.alert(error.message);
    }
    // return showInAppNotification("Sign In", "Check your connection", "error");
  }
}

const tourSagas = () => [
  takeLatest(UpdateTourTypes.UPDATE_TOUR, updateTourSaga),
  takeLatest(UpdateTourTypes.ADD_SITE_TO_TOUR, addSiteToTourSaga),
];

export default tourSagas();
