import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const AppTypes = makeConstantCreator("STARTUP", "CHANGE_NETWORK_STATUS");

const startup = () => makeActionCreator(AppTypes.STARTUP);

const changeNetworkStatus = (status) =>
  makeActionCreator(AppTypes.CHANGE_NETWORK_STATUS, { status });

export default {
  startup,
  changeNetworkStatus,
};
