import { actionTypes } from "../actionTypes";

const initialState = {
  messureMethod: "c",
  colorMode: "dark",
};

const preferencesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_MESSURE_METHOD:
      return { ...state, messureMethod: payload };
    case actionTypes.CHANGE_COLOR_MODE:
      return { ...state, colorMode: payload };

    default:
      return state;
  }
};

export default preferencesReducer;
