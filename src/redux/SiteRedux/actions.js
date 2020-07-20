import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const SiteTypes = makeConstantCreator(
  "GET_ALL_SITE",
  "GET_ALL_SITE_SUCCESS",
  "GET_ALL_SITE_FAILURE"
);

const getAllSite = () => makeActionCreator(SiteTypes.GET_ALL_SITE);
const getAllSiteSuccess = (response) =>
  makeActionCreator(SiteTypes.GET_ALL_SITE_SUCCESS, { response });
const getAllSiteFailure = (error) =>
  makeActionCreator(SiteTypes.GET_ALL_SITE_FAILURE, { error });

export default {
  getAllSite,
  getAllSiteSuccess,
  getAllSiteFailure,
};
