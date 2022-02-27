import axios from "axios";
import { API_KEY, days, DEFAULT_URL } from "./constants";

export const fetchSuggestions = async (query) => {
  if (!query) return [];

  const res = await axios.get(
    `${DEFAULT_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
  );
  return res.data;
};

export const fetchCuurentWeather = async (cityKey) => {
  const res = await axios.get(
    `${DEFAULT_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&language=en-us`
  );
  return res.data;
};

export const fetchFiveDaysWeather = async (cityKey) => {
  const res = await axios.get(
    `${DEFAULT_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`
  );
  return res.data;
};

export const getIcon = (id) => {
  if (id < 10) {
    id = `0${id}`;
  }
  return `https://developer.accuweather.com/sites/default/files/${id}-s.png`;
};

export const checkFavroite = (favList, cityKey) => {
  return Object.keys(favList).includes(cityKey);
};

export const addToFavHandler = (favList, favData) => {
  return { ...favList, [favData.cityKey]: favData };
};

export const removeFavHandler = (favList, cityKey) => {
  const newList = { ...favList };
  delete newList[cityKey];
  return newList;
};

export const getDayName = (date) => {
  const today = new Date();
  const day = new Date(date);

  if (today.getDate() === day.getDate()) return "Today";

  return days[day.getDay()];
};

export const fetchCityByCoords = async (lat, lon) => {
  const res = await axios.get(
    `${DEFAULT_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}`
  );
  return { cityKey: res.data.Key, cityName: res.data.LocalizedName };
};
