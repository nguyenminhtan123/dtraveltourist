import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const AuthTypes = makeConstantCreator(
  "LOGIN",
  "LOGIN_SUCCESS",
  "LOGIN_FAILURE",
  "LOGOUT",

  "REGISTER",
  "REGISTER_SUCCESS",
  "REGISTER_FAIL",

  "GET_USER_SUCCESS",
  "GET_USER_DETAIL",
  "GET_USER_DETAIL_SUCCESS"
);

const login = (data) => makeActionCreator(AuthTypes.LOGIN, { data });
const loginSuccess = (response) =>
  makeActionCreator(AuthTypes.LOGIN_SUCCESS, { response });
const loginFailure = (error) =>
  makeActionCreator(AuthTypes.LOGIN_FAILURE, { error });
const logout = () => makeActionCreator(AuthTypes.LOGOUT);

const register = (data) => makeActionCreator(AuthTypes.REGISTER, { data });
const registerSuccess = (response) =>
  makeActionCreator(AuthTypes.REGISTER_SUCCESS, { response });
const registerFail = (error) =>
  makeActionCreator(AuthTypes.REGISTER_FAIL, { error });

// const getUser = () => makeActionCreator(AuthTypes.GET_USER);
const getUserSuccess = (response) =>
  makeActionCreator(AuthTypes.GET_USER_SUCCESS, { response });
// const getUserFail = (error) =>
// makeActionCreator(AuthTypes.GET_USER_FAIL, { error });
const getUserDetail = (id) =>
  makeActionCreator(AuthTypes.GET_USER_DETAIL, { id });
const getUserDetailSuccess = (response) =>
  makeActionCreator(AuthTypes.GET_USER_DETAIL_SUCCESS, { response });

export default {
  login,
  loginSuccess,
  loginFailure,
  logout,

  register,
  registerSuccess,
  registerFail,

  // getUser,
  getUserSuccess,
  // getUserFail,
};
