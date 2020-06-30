import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const AuthTypes = makeConstantCreator(
  "LOGIN",
  "LOGIN_SUCCESS",
  "LOGIN_FAILURE",
  "LOGOUT",

  "REGISTER",
  "REGISTER_SUCCESS",
  "REGISTER_FAIL"
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
export default {
  login,
  loginSuccess,
  loginFailure,
  logout,

  register,
  registerSuccess,
  registerFail,
};
