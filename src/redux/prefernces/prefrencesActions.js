import { actionTypes } from "../actionTypes";

export const changMessureMethod = (val) => ({
  type: actionTypes.CHANGE_MESSURE_METHOD,
  payload: val,
});

export const changeColorMode = (color) => ({
  type: actionTypes.CHANGE_COLOR_MODE,
  payload: color,
});
