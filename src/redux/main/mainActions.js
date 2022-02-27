import {
  fetchCityByCoords,
  fetchCuurentWeather,
  fetchFiveDaysWeather,
  fetchSuggestions,
} from "../../utils";
import { actionTypes } from "../actionTypes";

export const getSuggestions = (query) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSuggestionsStart());
      const suggestions = await fetchSuggestions(query);

      dispatch(fetchSuggestionsSuccess(suggestions));
    } catch (error) {
      console.log(error);
      dispatch(fetchSuggestionsFailure());
    }
  };
};

export const getCityByCoords = (lat, lon) => {
  return async (dispatch) => {
    try {
      const res = await fetchCityByCoords(lat, lon);
      dispatch(getWeatherData(res.cityKey, res.cityName));
    } catch (error) {
      dispatch(fetchWeatherDataFailure());
    }
  };
};

const fetchSuggestionsStart = () => ({
  type: actionTypes.FETCH_SUGGESTIONS_STARTS,
});
const fetchSuggestionsSuccess = (suggestions) => ({
  type: actionTypes.FETCH_SUGGESTIONS_SUCCESS,
  payload: suggestions,
});
const fetchSuggestionsFailure = () => ({
  type: actionTypes.FETCH_SUGGESTIONS_FAILURE,
});

export const getWeatherData = (cityKey, cityName) => {
  return async (dispatch) => {
    dispatch(fetchWeatherDataStarts());
    try {
      const currentWeatherData = await fetchCuurentWeather(cityKey);
      dispatch(
        fetchCurrentWeatherSuccess(cityKey, cityName, currentWeatherData)
      );
      const fiveDaysData = await fetchFiveDaysWeather(cityKey);
      dispatch(fetchFiveDaysSuccess(fiveDaysData));
      dispatch(fetchWeatherDataSuccess());
    } catch (error) {
      console.log("fetch failure");
      dispatch(fetchWeatherDataFailure());
    }
  };
};

const fetchWeatherDataStarts = () => ({
  type: actionTypes.FETCH_WEATHER_DATA_STARTS,
});

const fetchWeatherDataSuccess = () => ({
  type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
});

export const fetchWeatherDataFailure = () => ({
  type: actionTypes.FETCH_WEATHER_DATA_FAILURE,
});

const fetchFiveDaysSuccess = (fiveDaysData) => ({
  type: actionTypes.FETCH_FIVE_DAYS_SUCCESS,
  payload: fiveDaysData,
});
export const fetchCurrentWeatherSuccess = (cityKey, cityName, data) => ({
  type: actionTypes.FTECH_CURRENT_WEATHER_SUCCESS,
  payload: { cityKey, cityName, data },
});

export const addtoFavorites = (cityData) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: cityData,
  };
};

export const removeFromFavorites = (cityKey) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: cityKey,
});
