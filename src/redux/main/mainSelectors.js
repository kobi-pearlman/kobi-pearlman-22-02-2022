import { createSelector } from "reselect";
import { getIcon } from "../../utils";
import { selectMessureMethod } from "../prefernces/preferencesSelectors";

const selectMain = (state) => state.main;

export const seletSuggestions = createSelector(
  [selectMain],
  (main) => main.suggestions
);

export const selectCityInfo = createSelector([selectMain], (main) => ({
  isFavorite: main.isFavorite,
  cityKey: main.cityKey,
  cityName: main.cityName,
}));

export const selectCurrentWeatherData = createSelector(
  [selectMain],
  (main) => main.currentWeatherData
);

export const selectDescription = createSelector(
  [selectCurrentWeatherData],
  (data) => data.WeatherText
);

export const selectCurrentTemp = createSelector(
  [selectCurrentWeatherData, selectMessureMethod],
  (data, messureMethod) =>
    messureMethod === "c"
      ? Math.round(data.Temperature.Metric.Value)
      : Math.round(data.Temperature.Metric.Value * 1.8 + 32)
);

export const selectWeatherDescription = createSelector(
  [selectCurrentWeatherData],
  (weatherData) => weatherData.WeatherText
);

export const selectFiveDaysForecast = createSelector(
  [selectMain, selectMessureMethod],
  (main, messureMethod) =>
    main.fiveDaysForecast.map((day) => ({
      date: day.Date,
      icon: getIcon(day.Day.Icon),
      iconPhrase: day.Day.IconPhrase,
      temperature:
        messureMethod === "c"
          ? Math.round(day.Temperature.Maximum.Value)
          : Math.round(day.Temperature.Maximum.Value * 1.8 + 32),
    }))
);

export const selectIcon = createSelector(
  [selectCurrentWeatherData],
  (currentWeatherData) => getIcon(currentWeatherData.WeatherIcon)
);

export const selectIsCurrentWeatherReady = createSelector(
  [selectMain],
  (main) => !!main.currentWeatherData
);

export const selectFavoritesList = createSelector(
  [selectMain],
  (main) => main.favorites
);
