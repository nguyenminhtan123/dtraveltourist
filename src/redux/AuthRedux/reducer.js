import Immutable from "seamless-immutable";
import { AuthTypes } from "./actions";

import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  data: {},
  error: null,
  token: null,
  loginLoading: false,
  registerLoading: false,
  user: {},
});

const login = (state, { data }) =>
  state.merge({
    loginLoading: true,
  });

const loginSuccess = (state, { response }) =>
  state.merge({
    data: response.data,
    token: response.data.token,
    loginLoading: false,
  });

const loginFailure = (state, { error }) =>
  state.merge({
    error: error,
    loginLoading: false,
  });

const logout = (state) => INITIAL_STATE;
//register
const register = (state, { data }) =>
  state.merge({
    registerLoading: true,
  });

const registerSuccess = (state, { response }) =>
  state.merge({
    data: response.data,
    token: response.data.token,
    registerLoading: false,
  });

const registerFail = (state, { error }) =>
  state.merge({
    error: error.error,
    registerLoading: false,
  });

const getUserDetailSuccess = (state, { response }) =>
  state.merge({
    user: response.data,
  });

const ACTION_HANDLERS = {
  [AuthTypes.LOGIN]: login,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
  [AuthTypes.LOGOUT]: logout,

  [AuthTypes.REGISTER]: register,
  [AuthTypes.REGISTER_SUCCESS]: registerSuccess,
  [AuthTypes.REGISTER_FAIL]: registerFail,

  [AuthTypes.GET_USER_DETAIL_SUCCESS]: getUserDetailSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
