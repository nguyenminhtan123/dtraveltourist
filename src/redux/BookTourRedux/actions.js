import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const UpdateTourTypes = makeConstantCreator(
  "UPDATE_TOUR",
  "UPDATE_TOUR_SUCCESS",
  "UPDATE_TOUR_FAIL"
);

const updateTour = (data) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR, { data });
const updateTourSuccess = (response) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR_SUCCESS, { response });
const updateTourFail = (error) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR_FAIL, { error });
export default {
  updateTour,
  updateTourSuccess,
  updateTourFail,
};
