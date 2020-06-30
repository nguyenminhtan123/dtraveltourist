import Immutable from "seamless-immutable";
import { AppTypes } from "./actions";
import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  networkStatus: null,
});

export const changeNetworkStatus = (state, { status }) =>
  state.merge({ networkStatus: status });

const ACTION_HANDLERS = {
  [AppTypes.CHANGE_NETWORK_STATUS]: changeNetworkStatus,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
