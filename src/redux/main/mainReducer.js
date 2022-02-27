import { addToFavHandler, checkFavroite, removeFavHandler } from "../../utils";
import { actionTypes } from "../actionTypes";

const initalState = {
  favorites: {},
  suggestions: [],
  currentWeatherData: null,
  fiveDaysForecast: [],
  isFavorite: false,
  cityKey: "",
  cityName: "",
};

const mainReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_SUGGESTIONS_SUCCESS:
      return { ...state, suggestions: payload };
    case actionTypes.FTECH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        cityName: payload.cityName,
        cityKey: payload.cityKey,
        currentWeatherData: payload.data[0],
        isFavorite: checkFavroite(state.favorites, payload.cityKey),
      };

    case actionTypes.FETCH_FIVE_DAYS_SUCCESS:
      return { ...state, fiveDaysForecast: payload.DailyForecasts };

    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: addToFavHandler(state.favorites, payload),
        isFavorite: true,
      };

    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: removeFavHandler(state.favorites, payload),
        isFavorite: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
