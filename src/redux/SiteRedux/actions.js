import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const SiteTypes = makeConstantCreator(
  "GET_ALL_SITE",
  "GET_ALL_SITE_SUCCESS",
  "GET_ALL_SITE_FAILURE",

  "GET_SITE_BY_ID",
  "GET_SITE_BY_ID_SUCCESS",
  "GET_SITE_BY_ID_FAILURE"
);

const getAllSite = () => makeActionCreator(SiteTypes.GET_ALL_SITE);
const getAllSiteSuccess = (response) =>
  makeActionCreator(SiteTypes.GET_ALL_SITE_SUCCESS, { response });
const getAllSiteFailure = (error) =>
  makeActionCreator(SiteTypes.GET_ALL_SITE_FAILURE, { error });

const getSiteById = (id) => makeActionCreator(SiteTypes.GET_SITE_BY_ID, { id });
const getSiteByIdSuccess = (response) =>
  makeActionCreator(SiteTypes.GET_SITE_BY_ID_SUCCESS, { response });
const getSiteByIdFailure = (error) =>
  makeActionCreator(SiteTypes.GET_SITE_BY_ID_FAILURE, { error });

export default {
  getAllSite,
  getAllSiteSuccess,
  getAllSiteFailure,

  getSiteById,
  getSiteByIdSuccess,
  getSiteByIdFailure,
};
