import Immutable from "seamless-immutable";
import { SiteTypes } from "./actions";

import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  sites: {},
  siteById: {},
  error: null,
  getAllSiteLoading: false,
  getSiteByIdLoading: false,
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

const getSiteById = (state) =>
  state.merge({
    getSiteByIdLoading: true,
  });

const getSiteByIdSuccess = (state, { response }) =>
  state.merge({
    siteById: response.data,
    getSiteByIdLoading: false,
  });

const getSiteByIdFailure = (state, { error }) =>
  state.merge({
    error: error,
    getAllSiteLoading: false,
  });

const ACTION_HANDLERS = {
  [SiteTypes.GET_ALL_SITE]: getAllSite,
  [SiteTypes.GET_ALL_SITE_SUCCESS]: getAllSiteSuccess,
  [SiteTypes.GET_ALL_SITE_FAILURE]: getAllSiteFailure,

  [SiteTypes.GET_SITE_BY_ID]: getSiteById,
  [SiteTypes.GET_SITE_BY_ID_SUCCESS]: getSiteByIdSuccess,
  [SiteTypes.GET_SITE_BY_ID_FAILURE]: getSiteByIdFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
