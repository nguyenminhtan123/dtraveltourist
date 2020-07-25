import { put, call, takeLatest } from "redux-saga/effects";
import TourActions, { UpdateTourTypes } from "./actions";
import { updateTourApi } from "../../api/tour";

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

const tourSagas = () => [
  takeLatest(UpdateTourTypes.UPDATE_TOUR, updateTourSaga),
];

export default tourSagas();
