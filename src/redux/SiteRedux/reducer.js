import Immutable from "seamless-immutable";
import { SiteTypes } from "./actions";

import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  sites: {},
  error: null,
  getAllSiteLoading: false,
});

const getAllSite = (state) =>
  state.merge({
    getAllSiteLoading: true,
  });

const getAllSiteSuccess = (state, { response }) =>
  state.merge({
    sites: response.data,
    getAllSiteLoading: false,
  });

const getAllSiteFailure = (state, { error }) =>
  state.merge({
    error: error,
    getAllSiteLoading: false,
  });

const ACTION_HANDLERS = {
  [SiteTypes.GET_ALL_SITE]: getAllSite,
  [SiteTypes.GET_ALL_SITE_SUCCESS]: getAllSiteSuccess,
  [SiteTypes.GET_ALL_SITE_FAILURE]: getAllSiteFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
