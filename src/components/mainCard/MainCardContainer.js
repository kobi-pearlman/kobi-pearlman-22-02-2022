import React from "react";

import "./mainCardContainer.scss";
import {} from "../../redux/main/mainSelectors";
import MainCardHeader from "./mainCardHeader/MainCardHeader";
import FiveDaysForecastContiner from "./fiveDaysForecast/FiveDaysForecastContainer";
import CurrentWeather from "./currentWeather/CurrentWeather";
import WithSpinner from "../hoc/WithSpinner";

const MainCardContainer = () => {
  return (
    <div className="results-container">
      <MainCardHeader />
      <CurrentWeather />
      <FiveDaysForecastContiner />
    </div>
  );
};

export default WithSpinner(MainCardContainer);
