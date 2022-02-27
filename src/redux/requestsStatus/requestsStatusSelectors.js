import { createSelector } from "reselect";

const selectRequestsStatus = (state) => state.requsetsStatus;

export const selectIsWeatherLoading = createSelector(
  [selectRequestsStatus],
  (status) => status.isWeatherLoading
);

export const selectShowError = createSelector(
  [selectRequestsStatus],
  (status) => status.showError
);
