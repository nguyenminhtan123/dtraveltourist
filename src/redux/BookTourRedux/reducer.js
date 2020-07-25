import Immutable from "seamless-immutable";
import { UpdateTourTypes } from "./actions";

import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  data: {},
  error: null,
  updateTourLoading: false,
});

const updateTour = (state) =>
  state.merge({
    updateTourLoading: true,
  });

const updateTourSuccess = (state, { response }) =>
  state.merge({
    data: response.data,
    updateTourLoading: false,
  });

const updateTourFailure = (state, { error }) =>
  state.merge({
    error: error,
    updateTourLoading: false,
  });

const ACTION_HANDLERS = {
  [UpdateTourTypes.UPDATE_TOUR]: updateTour,
  [UpdateTourTypes.UPDATE_TOUR_SUCCESS]: updateTourSuccess,
  [UpdateTourTypes.UPDATE_TOUR_FAILURE]: updateTourFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
