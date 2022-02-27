import { actionTypes } from "../actionTypes";

const initialState = {
  isWeatherLoading: false,
  hasError: false,
  showError: false,
};

const requestsStatusReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.FETCH_WEATHER_DATA_STARTS:
      return { ...state, isWeatherLoading: true, hasError: false };
    case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
      return { ...state, isWeatherLoading: false, hasError: false };
    case actionTypes.FETCH_WEATHER_DATA_FAILURE:
    case actionTypes.FETCH_SUGGESTIONS_FAILURE:
      return {
        ...state,
        isWeatherLoading: false,
        hasError: true,
        showError: true,
      };
    case actionTypes.CLOSE_ERROR_MSG:
      return { ...state, showError: false };
    default:
      return state;
  }
};

export default requestsStatusReducer;
