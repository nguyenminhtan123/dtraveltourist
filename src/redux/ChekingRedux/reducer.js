import Immutable from "seamless-immutable";
import { checkTypes } from "./actions";
import { makeReducerCreator } from "../../utils/reduxUtils";

export const INITIAL_STATE = Immutable({
  CheckListData: {},
});

export const check = (state, { data }) => state.merge({ CheckListData: data });

const ACTION_HANDLERS = {
  [checkTypes.CHECK]: check,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
