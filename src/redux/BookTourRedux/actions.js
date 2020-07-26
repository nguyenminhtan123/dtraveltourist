import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const UpdateTourTypes = makeConstantCreator(
  "UPDATE_TOUR",
  "UPDATE_TOUR_SUCCESS",
  "UPDATE_TOUR_FAIL",

  "ADD_SITE_TO_TOUR"
  // "ADD_SITE_TO_TOUR_SUCCESS",
  // "ADD_SITE_TO_TOUR_FAIL"
);

const updateTour = (data) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR, { data });
const updateTourSuccess = (response) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR_SUCCESS, { response });
const updateTourFail = (error) =>
  makeActionCreator(UpdateTourTypes.UPDATE_TOUR_FAIL, { error });

const addSiteToTour = (data) =>
  makeActionCreator(UpdateTourTypes.ADD_SITE_TO_TOUR, { data });
// const addSiteToTourSuccess = (response) =>
//   makeActionCreator(UpdateTourTypes.ADD_SITE_TO_TOUR_SUCCESS, { response });
// const addSiteToTourFail = (error) =>
//   makeActionCreator(UpdateTourTypes.ADD_SITE_TO_TOUR_FAIL, { error });

export default {
  addSiteToTour,
  // addSiteToTourSuccess,
  // addSiteToTourFail,

  updateTour,
  updateTourSuccess,
  updateTourFail,
};
