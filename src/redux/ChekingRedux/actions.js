import { makeActionCreator, makeConstantCreator } from "../../utils/reduxUtils";

export const checkTypes = makeConstantCreator("CHECK");
const check = (data) => makeActionCreator(checkTypes.CHECK, { data });
export default {
  check,
};
