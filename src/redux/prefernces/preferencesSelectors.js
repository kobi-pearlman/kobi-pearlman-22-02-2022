import { createSelector } from "reselect";

const selectPrefrences = (state) => state.preferences;

export const selectMessureMethod = createSelector(
  [selectPrefrences],
  (pref) => pref.messureMethod
);

export const selectColorMode = createSelector(
  [selectPrefrences],
  (pref) => pref.colorMode
);
